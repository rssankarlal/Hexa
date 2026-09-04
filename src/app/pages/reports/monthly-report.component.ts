import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReportService, MonthlyReportData } from '../../services/report.service';

@Component({
  selector: 'app-monthly-report',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './monthly-report.component.html',
  styleUrl: './monthly-report.component.scss'
})
export class MonthlyReportComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly reportService = inject(ReportService);

  loading = false;
  reportData: MonthlyReportData | null = null;
  displayedColumns: string[] = ['category', 'transactions', 'subtotal', 'tax', 'total'];

  readonly filterForm = this.fb.group({
    month: [new Date().getMonth() + 1, Validators.required],
    year: [new Date().getFullYear(), Validators.required],
    format: ['PDF', Validators.required]
  });

  readonly months = [
    { value: 1, label: 'January' }, { value: 2, label: 'February' },
    { value: 3, label: 'March' }, { value: 4, label: 'April' },
    { value: 5, label: 'May' }, { value: 6, label: 'June' },
    { value: 7, label: 'July' }, { value: 8, label: 'August' },
    { value: 9, label: 'September' }, { value: 10, label: 'October' },
    { value: 11, label: 'November' }, { value: 12, label: 'December' }
  ];

  ngOnInit(): void {
    this.generateReport();
  }

  generateReport(): void {
    this.loading = true;
    const { month, year, format } = this.filterForm.getRawValue();
    this.reportService.getMonthlyReport(month!, year!, format!).subscribe({
      next: (data) => {
        this.reportData = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  exportReport(): void {
    const { month, year, format } = this.filterForm.getRawValue();
    this.reportService.downloadReport(month!, year!, format!);
  }
}