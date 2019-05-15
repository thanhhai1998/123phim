import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowMenuUser: boolean = false;
  showFormLogin: boolean = false;
  nameUser = "";
  isLoginSuccess: boolean = false;
  openFormLogin() {
    this.showFormLogin = !this.showFormLogin;
  }
  closeLoginForm(status) {
    status = !status;
    this.showFormLogin = status;
  }
  showMenuUser() {
    this.isShowMenuUser = !this.isShowMenuUser;
  }
  getUserName(name) {
    this.nameUser = name;
    console.log(name);
    this.isLoginSuccess = true;
    this.showFormLogin = false;
  }
  dangxuat() {
    this.isLoginSuccess = false;
    localStorage.clear();
    this.isShowMenuUser = false;
     
  }
  constructor() { }

  ngOnInit() {
    let nguoidung = JSON.parse(localStorage.getItem('User'));
    if (nguoidung != null) {
      this.isLoginSuccess = true;
      this.nameUser = nguoidung.TaiKhoan;
    }
    else {
      this.isLoginSuccess = false;
    }
  }

}
