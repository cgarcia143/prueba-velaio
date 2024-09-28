import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { uniqueNameValidator } from 'src/app/helpers/helpers';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
})
export class FormTasksComponent {
  taskForm: FormGroup;
  minDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormTasksComponent>,
    private fb: FormBuilder,
    ) {
    this.taskForm = this.fb.group({
      id: [this.data, Validators.required],
      taskName: ['', Validators.required],
      deadline: ['', Validators.required],
      completed: [false, Validators.required],
      people: this.fb.array([], uniqueNameValidator())
    });

    this.minDate = new Date();
  }

  get people() {
    return this.taskForm.get('people') as FormArray;
  }

  addPerson() {
    const personForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)], Validators.required)
    });

    this.people.push(personForm);
  }

  removePerson(index: number) {
    this.people.removeAt(index);
  }

  getSkills(personIndex: number) {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  addSkill(personIndex: number) {
    this.getSkills(personIndex).push(this.fb.control(''));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    this.getSkills(personIndex).removeAt(skillIndex);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.matDialogRef.close(this.taskForm.value);
    }
  }
}
