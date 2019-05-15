import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinestar',
  templateUrl: './cinestar.component.html',
  styleUrls: ['./cinestar.component.scss']
})
export class CinestarComponent implements OnInit {
  DSRapPhimCinestar = [
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../assets/image/img_tenrap/galaxy-nguyen-du-15379626329832.jpg' , tenrap: 'jdkjbwjkdb' , diachi: 'wjkdbkjwbd' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-huynh-tan-phat-15381070102598.jpg'  , tenrap: 'wfhejbfeb' , diachi: 'wkwbdjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-kinh-duong-vuong-15381065563489.jpg'  , tenrap: 'wkfhkwnf' , diachi: 'wjkbdjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-nguyen-van-qua-15381052937743.jpg'  , tenrap: 'qwkfhjbwef' , diachi: 'wkjbdkjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
      ];
  constructor() { }

  ngOnInit() {
  }

}
