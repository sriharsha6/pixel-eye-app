import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.scss']
})
export class GetintouchComponent implements OnInit {


  constructor() {
    
   }

  ngOnInit() {
  }
  onSubmit(e){
    console.log(e)
  }
}
