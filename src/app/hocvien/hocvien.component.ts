import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hocvien',
  templateUrl: './hocvien.component.html',
  styleUrls: ['./hocvien.component.css']
})
export class HocvienComponent implements OnInit {
  newName;
  newAge;
  constructor() {}
  ngOnInit() {
  }
  @Input() id: String;
  @Input() ten: String;
  @Input() tuoi: number;
  @Input() isShowEdit: boolean;
  
  @Output() editClick = new EventEmitter<any>();
  
  editHV(){
    this.editClick.emit({id: this.id, name: this.newName, age: this.newAge});
    this.newName='';
    this.newAge='';
  }

}
