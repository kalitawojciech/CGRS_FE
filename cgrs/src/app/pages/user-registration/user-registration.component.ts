import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { IRegisterUserPayload } from '../../models/payloads/register-user.payload';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'nick',
      type: 'input',
      templateOptions: {
        label: 'Nick',
        placeholder: 'Enter nick',
        required: true,
      }
    },
    {
      key: 'birthdate',
      type: 'datepicker',
      templateOptions: {
        label: 'Birthdate',
        placeholder: 'Enter your birthdate',
        description: 'Birthdate',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
      }
    }
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.model);

    this.usersService.registerUser(this.model)
      .pipe()
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}

