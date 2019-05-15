import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
 
  constructor(private http: HttpClient) { }
  LayDSPhim(): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06`;
    const obs = this.http.get(url).pipe(map(res => res));
    return obs;
  }
  chitietphim(maphim): Observable<any> {
    return this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`);
  }
  laychitietphongve(malichchieu): Observable<any> {
    return this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`);
  }
}
