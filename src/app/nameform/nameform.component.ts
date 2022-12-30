import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-nameform',
  templateUrl: './nameform.component.html',
  styleUrls: ['./nameform.component.css']
})
export class NameformComponent {
  name=new FormControl("user");
  pass=new FormControl("pass");
  submit(f:NgForm) {
    console.log("Submitted: ",f.value);
  }
}

