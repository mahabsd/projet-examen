import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');
//   if (password.pristine || confirmPassword.pristine) {
//     return null
//   }
//   return (password && confirmPassword && password.value) != confirmPassword.value ?
//     { 'misMatch': true } :
//     null;
// }




export const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value != confirmPassword.value ? { 'misMatch': true } : null;
};