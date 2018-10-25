import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authServce: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authServce.register(this.model).subscribe(() => {
      this.alertify.success('registration succesful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    // this emit can be anything a Boolean, object, string anything
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
