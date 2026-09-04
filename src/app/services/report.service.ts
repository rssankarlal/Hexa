import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface MonthlyReportData {
  month: number;
  year: number;
  generatedAt: string;
  summary: { totalRevenue: number; totalTransactions: number; netMargin: number; };
  lineItems: Array<{ category: string; transactions: number; subtotal: number; tax: number; total: number; }>;
}

@Injectable({ providedIn: 'root' })
export class ReportService {
  private readonly http = inject(HttpClient);

  getMonthlyReport(month: number, year: number, format: string): Observable<MonthlyReportData> {
    const mockData: MonthlyReportData = {
      month,
      year,
      generatedAt: new Date().toISOString(),
      summary: { totalRevenue: 284500.00, totalTransactions: 1420, netMargin: 32.4 },
      lineItems: [
        { category: 'Enterprise Subscriptions', transactions: 380, subtotal: 165000, tax: 13200, total: 178200 },
        { category: 'Professional Licenses', transactions: 650, subtotal: 78000, tax: 6240, total: 84240 }
      ]
    };
    return of(mockData).pipe(delay(500));
  }

  downloadReport(month: number, year: number, format: string): void {
    alert(`Export initiated for monthly_sales_report_${year}_${month}.${format.toLowerCase()}`);
  }
}