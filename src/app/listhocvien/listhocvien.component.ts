import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listhocvien',
  templateUrl: './listhocvien.component.html',
  styleUrls: ['./listhocvien.component.css']
})
export class ListhocvienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.arHocVien.sort(function (a, b) {
      return b.tuoi - a.tuoi;
    });
  }

  arHocVien = [
    { id: "hv1", ten: "Nguyen Van Dinh", tuoi: 27 },
    { id: "hv2", ten: "Le Thi Hoa", tuoi: 21 },
    { id: "hv3", ten: "Tố Quyên", tuoi: 22 },
    { id: "hv4", ten: "Trần Thị Hảo", tuoi: 25 },
    { id: "hv5", ten: "Nguyễn Như Quỳnh", tuoi: 20 },
  ];
  isShow = true;
  isShowAdd = false;
  isShowDel = false;
  isShowEdit = false;
  isExist(id) {
    const index = this.arHocVien.findIndex(e => e.id == id);
    if (index == -1) return false;
    return true;
  }
  addHV(HocVienForm) {
    var id = HocVienForm.value.id;
    if (this.isExist(id)) {
      alert("Ma hoc vien da ton tai!");
    } else {
      var ten = HocVienForm.value.ten;
      var tuoi = Math.floor(Math.random() * 7) + 18;
      var hocVien = { id, ten, tuoi };
      this.arHocVien.push(hocVien);
      alert("Da them thanh cong!");
      this.isShowAdd = !this.isShowAdd;
      this.isShow = !this.isShow;
    }
  }
}
