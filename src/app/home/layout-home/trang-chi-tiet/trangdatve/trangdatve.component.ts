import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { DatveService } from 'src/app/service/datve.service';
import { Ve } from 'src/app/Models/datve';
import { ActivatedRoute, Router } from '@angular/router';
import { ghe } from 'src/app/Models/ghe';
import { PhimService } from 'src/app/service/phim.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.scss']
})
export class TrangdatveComponent implements OnInit,AfterViewInit {
  isShowMenuUser: boolean = false;
  showFormLogin: boolean = false;
  isLoginSuccess: boolean = false;
  kiemtraghedadat: number = 0;
  soLuongVe: number = 1;
  // loading = false;
  gheDangDat = [];
  step = 1;
  gheDuocChon = [];
  nameUser = "";
  subDatve: Subscription;
  malichchieu: any;
  DanhSachGhe = [];
  phim: any; 
  DanhSachGheClone: Array<ghe> = []
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
  cloneArray(DS) {
    for (let item of DS) {
      const gheClone = {
        Ghe: { ...item },
        status: false
      }
      this.DanhSachGhe.push(gheClone);

    }
    console.log(this.DanhSachGhe);
  }
  dangxuat() {
    this.isLoginSuccess = false;
    localStorage.clear();
    this.isShowMenuUser = false;
     
  }
 
  chonghe(name) {
    
    // this.loading = true;
    this.spinner.show(name); 
    setTimeout(() => {
      this.step = 2;
    for (let i = 0; i < this.DanhSachGhe.length; i++) {
      this.DanhSachGhe[i].status = false;
    }
    
    // this.loading = false;
    this.spinner.hide(name);
    this.gheDangDat = [];
    this.kiemtraghedadat = 0;
    }, 1500);
  }
  backtoStep1() {
    this.step = 1;
    this.gheDuocChon = [];
  }
  Datghe(ghe) {

    if (ghe.status) {
      if (this.gheDangDat.length == this.soLuongVe) {
        for (let index of this.gheDangDat) {
          if (this.gheDangDat.length == this.soLuongVe) {

            this.gheDangDat[0].status = false;
            this.gheDangDat.splice(this.gheDangDat[0], 1);

            this.kiemtraghedadat--;
          }


        } this.gheDangDat.push(ghe);
        this.kiemtraghedadat++;
        console.log(this.kiemtraghedadat);
      }
      else {
        this.gheDangDat.push(ghe);
        this.kiemtraghedadat++;
        console.log(this.kiemtraghedadat);
      }
    }
    else {
      for (let index in this.gheDangDat) {
        if (this.gheDangDat[index].Ghe.MaGhe === ghe.Ghe.MaGhe) {
          this.gheDangDat.splice(parseInt(index), 1);

          this.kiemtraghedadat--;
          console.log(this.kiemtraghedadat);
        }
      }
    }
  }
  datVe(Ve: Ve) {
    this.gheDuocChon = [];
    for (let i = 0; i < this.gheDangDat.length; i++) {
      let ve: { MaGhe: string, GiaVe: string } = {
        MaGhe: this.gheDangDat[i].Ghe.MaGhe,
        GiaVe: this.gheDangDat[i].Ghe.GiaVe
      }
      this.gheDuocChon.push(ve);

    }

    if (this.isLoginSuccess == false) {
      Swal.fire({
        title: ' Vui lòng đăng nhập trước khi đặt vé ! ',

        type: 'error',
        confirmButtonColor: '#fb4226',
        confirmButtonText: 'Đăng Nhập',

      }).then(() => {
        this.showFormLogin = true;
      });


    }
    else if (this.kiemtraghedadat < this.soLuongVe) {
      Swal.fire({
        title: 'ERROR!',
        type: 'error',
        confirmButtonColor: '#fb4226',
        html:
          'Vui lòng chọn đủ số ghế !!',

      })
    }
    else {

      console.log(this.gheDuocChon);

      // for (let ghedadat of this.gheDuocChon) {
      //   for (let ghe of this.DanhSachGheClone) {
      //     if (ghedadat.MaGhe == ghe.MaGhe) {
      //       console.log(ghe)
      //     }
      //   }
      // }

      Ve = {
        MaLichChieu: this.malichchieu,
        TaiKhoanNguoiDung: this.nameUser,
        DanhSachVe: this.gheDuocChon
      }
      this.DatveService.Datve(Ve).subscribe((res) => {
        console.log(res);

        Swal.fire({
          type: 'success',
          title: 'Đặt Vé Thành Công !!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // this.router.navigate(['/home'])

        })
      }, (err) => {
        console.log(err);
      })

    }
  }


  giamSLVE() {
    this.soLuongVe--;
    if (this.soLuongVe < 1) {
      this.soLuongVe = 1;
    }
  }
  tangSLVE() {
    this.soLuongVe++;
  }
  constructor(
    private spinner: NgxSpinnerService,private router: Router, private chitiet: PhimService, private DatveService: DatveService, private activeRoute: ActivatedRoute, private laychitietphongve: PhimService) { }
  hinhPhim: any;
  ngAfterViewInit(){
  

  }
  ngOnInit() {
 
     

    let nguoidung = JSON.parse(localStorage.getItem('User'));
    if (nguoidung != null) {
      this.isLoginSuccess = true;
      this.nameUser = nguoidung.TaiKhoan;
    }
    else {
      this.isLoginSuccess = false;
    }
    this.activeRoute.params.subscribe(
      (res) => {
        console.log(res);
         
        this.chitiet.chitietphim(res.maphim).subscribe((ress) => {
          console.log(ress);
          
          this.phim = ress;
          let index = this.phim.LichChieu.findIndex(n => n.MaLichChieu == res.malichchieu);
          if (index === -1) {
           
              this.router.navigate(['/home'])
        
           
          }
        }, (err) => {
          console.log(err);
        });
        this.laychitietphongve.laychitietphongve(res.malichchieu).subscribe(
          (result) => {
            this.DanhSachGheClone = result.DanhSachGhe;
            this.cloneArray(this.DanhSachGheClone);
          }, (err) => {
            this.router.navigate(['/home']);

          }

        )
      },
      (err) => { this.router.navigate(['/home']) }
    );


  

  


  }
  

}
