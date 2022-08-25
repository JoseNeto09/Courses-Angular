import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location) { 
    this.form = this.formBuilder.group({
        name: [null],
        categoria: [null]
      });
    }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  onSuccess(){
    this._snackBar.open('Curso Salvo Com Sucesso', ' ',  {duration: 5000});
  }

  private onError(){
    this._snackBar.open('Error ao salvar curso.', ' ',  {duration: 5000});
  }

}