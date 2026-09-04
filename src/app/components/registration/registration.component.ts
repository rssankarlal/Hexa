import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  hidePassword = true;
  loading = false;
  successMessage = '';
  errorMessage = '';

  readonly registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    const { firstName, lastName, email, password } = this.registrationForm.getRawValue();

    // Simulate reactive user registration for Hexa
    setTimeout(() => {
      this.loading = false;
      this.successMessage = `Account created successfully for ${firstName} ${lastName}! Redirecting to login...`;
      setTimeout(() => {
        void this.router.navigate(['/login']);
      }, 1500);
    }, 800);
  }
}