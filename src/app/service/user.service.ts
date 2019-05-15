import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  DangKy(nguoidung: any): Observable<any> {
    return this.http.post("http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung", nguoidung,
      { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
  }
  Dangnhap(nguoidung: any): Observable<any> {
    return this.http.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoidung.TaiKhoan}&matkhau=${nguoidung.MatKhau}`, undefined,
      {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
  }
  LayDSNguoiDung(): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`;
    const obs = this.http.get(url).pipe(map(res => res));
    return obs;
  }
}
