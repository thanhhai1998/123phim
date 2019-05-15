import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {
  @Input() isShowFormLogin;
  @Output() evtLogin = new EventEmitter;
  SubDangnhap: Subscription;
  constructor(private userService: UserService) { }
  Dangnhap(nguoidung, formDangnhap) {
    if (formDangnhap.valid) {

      this.SubDangnhap = this.userService.Dangnhap(nguoidung).subscribe((res) => {
        console.log(res);
        if (typeof (res) == "object") {
          localStorage.setItem('User', JSON.stringify(res));
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'success',
            title: 'Đăng nhập  thành công !!',
            background:'#ffff',
            
            })
          this.evtLogin.emit(res.TaiKhoan);
        }
        else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'error',
            title: 'Tài khoản hoặc mật khẩu không tồn tại !!',
            background:'#ffff',
            
            })
        }
      }, (err) => { console.log(err); });
    }
     
  }
  ngOnInit() {
  }

}
