import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../../models/role';
import { IUser } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: IUser;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin(): boolean {
    return this.currentUser.role === Role.Admin || this.currentUser.role === Role.SuperAdmin;
  }

  get isSuperAdmin(): boolean {
    return this.currentUser.role === Role.SuperAdmin;
  }

  logout() {
    this.usersService.logout();
    this.router.navigate(['/']);
  }

}
