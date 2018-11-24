import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hocvien',
  templateUrl: './hocvien.component.html',
  styleUrls: ['./hocvien.component.css']
})
export class HocvienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() id: String;
  @Input() ten: String;
  @Input() tuoi: number;
}
