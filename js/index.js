const SinhVien = {
    masv: "",
    tensv: "",
    loaisv: "",
    diemToan: "",
    diemVan: "",
    dtb: "",
    xl: "",
    show: showIn4(),
}

function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
    this.masv = _maSV;
    this.tensv = _tenSV;
    this.loaisv = _loaiSV;
    this.diemToan = _diemToan;
    this.diemVan = _diemVan;
    this.dtb = Math.floor((this.diemToan + this.diemVan) / 2);
    if (this.dtb < 5.0) {
        xl = "Yếu";
    } else if (this.dtb >= 5 && this.dtb < 6.5) {
        xl = "Trung Bình";
    } else if (this.dtb >= 6.5 && this.dtb < 8.0) {
        xl = "Khá";
    } else if (this.dtb >= 8.0 && this.dtb < 10.0) {
        xl = "Giỏi";
    }
}

function addSV() {
    var _maSV, _tenSV, _loaiSV, _diemToan, _diemVan;
    domString(textMaSV, _maSV);
    domString(textTenSV, _tenSV);
    domString(loaiSV, _loaiSV);
    domFloat(textDiemToan, _diemToan);
    domFloat(textDiemVan, _diemVan);
    const sv = new SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan);
}
function showIn4() {
    domInner(spanTenSV, this.tensv);
    domInner(spanMaSV, this.masv);
    domInner(spanLoaiSV, this.loaiSV);
    domInner(spanDTB, this.dtb);
    domInner(spanXepLoai, this.xl);

}



//dom innerHTML
function domInner(dom, value) {
    const dom = document.getElementById('dom').innerHTML = value;
}

//dom String 
function domString(dom, value) {
    const domEL = document.getElementById('dom').value;
    value = domEL;
}
//dom Float 
function domFloat(dom, value) {
    const domEL = document.getElementById('dom').value;
    value = domEL * 1;
}

// add event
function addEventClick(dom, event) {
    const domEL = document.getElementById(dom);
    domEL.addEventListener("click", event);
}
addEventClick(show, showIn4());