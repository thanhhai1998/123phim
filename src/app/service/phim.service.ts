import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: HttpClient) { }
  chitietphim(maphim): Observable<any> {
    return this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`);
  }
  laychitietphongve(malichchieu): Observable<any> {
    return this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`);
  }
}
