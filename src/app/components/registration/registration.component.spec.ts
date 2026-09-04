import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent (DT-8)', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent, ReactiveFormsModule, RouterTestingModule, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the registration component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with invalid state', () => {
    expect(component.registrationForm.valid).toBeFalse();
  });

  it('should require firstName, lastName, email, and password fields', () => {
    const form = component.registrationForm;
    expect(form.get('firstName')?.valid).toBeFalse();
    expect(form.get('lastName')?.valid).toBeFalse();
    expect(form.get('email')?.valid).toBeFalse();
    expect(form.get('password')?.valid).toBeFalse();
  });

  it('should validate email format', () => {
    const email = component.registrationForm.get('email');
    email?.setValue('invalid-email');
    expect(email?.hasError('email')).toBeTrue();

    email?.setValue('test@example.com');
    expect(email?.valid).toBeTrue();
  });

  it('should validate password minimum length of 6 characters', () => {
    const password = component.registrationForm.get('password');
    password?.setValue('12345');
    expect(password?.hasError('minlength')).toBeTrue();

    password?.setValue('secret123');
    expect(password?.valid).toBeTrue();
  });

  it('should become valid when all required fields are filled correctly', () => {
    component.registrationForm.patchValue({
      firstName: 'Sankar',
      lastName: 'Lal',
      email: 'sankar@example.com',
      password: 'securePassword123'
    });
    expect(component.registrationForm.valid).toBeTrue();
  });

  it('should toggle password visibility flag', () => {
    expect(component.hidePassword).toBeTrue();
    component.hidePassword = !component.hidePassword;
    expect(component.hidePassword).toBeFalse();
  });
});