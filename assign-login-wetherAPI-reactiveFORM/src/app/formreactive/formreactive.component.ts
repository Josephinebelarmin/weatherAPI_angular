import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {

  signUpForm: FormGroup;
  @Output() formEmitter = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'fName':new FormControl(null)
    })
  }
  onSubmit(){
     console.log(this.signUpForm.value)
     this.formEmitter.emit(this.signUpForm.value.fName)
    }
  }


