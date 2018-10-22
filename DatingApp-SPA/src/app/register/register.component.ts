import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authServce: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authServce.register(this.model).subscribe(() => {
      console.log('registration succesful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    // this emit can be anything a Boolean, object, string anything
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
