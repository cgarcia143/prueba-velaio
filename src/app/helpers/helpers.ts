import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function uniqueNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const people = control.value as any[];
      const names = people.map(person => person.fullName);
      const hasDuplicates = names.some((name, index) => names.indexOf(name) !== index);
      return hasDuplicates ? { uniqueName: true } : null;
    };
  }