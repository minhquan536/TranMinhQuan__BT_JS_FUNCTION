const TIENTHUE60    = 5;
// tongTien * 500
const TIENTHUE120    = 10;
// (tongTien-50) * 650 + TIENDIEN1*50
const TIENTHUE210    = 15;
// (tongTien-100) * 850 + TIENDIEN1*50 + TIENDIEN2*50
const TIENTHUE384     = 20;
// (tongTien-200) * 1100 + TIENDIEN1*50 + TIENDIEN2*50 + TIENDIEN3*100
const TIENTHUE624    = 25;
// (tongTien-350)*1300 + TIENDIEN1*50 + TIENDIEN2*50 + TIENDIEN3*100 + TIENDIEN4*150
const TIENTHUE960    = 30;

const TIENTHUETREN960    = 35;

function tinhThue() {
    var hoTen = document.getElementById("hoTen2").value;
    var thuNhap = document.getElementById("tNHN").value;
    var soNguoi = document.getElementById("soNguoi").value;

    // console.log(hoTen,thuNhap,soNguoi);
    document.getElementById("txtTinhThue").innerHTML = "Họ và Tên: " + hoTen + "<br> Tổng thu nhập 1 năm: " + thuNhap + "<br> Số người phụ thuộc: " + soNguoi + "<br> tổng thuế cần nộp: " + thue(thuNhap,soNguoi).toLocaleString();
}

function thue(thuNhap,soNguoi) {
    var all = 0;

    
    if (thuNhap <= 6000000){
        all = (Number(thuNhap) - 4000000) -  (Number(soNguoi) * 0.05 * Number(thuNhap));
    }
    else if (thuNhap > 6000000 && thuNhap <= 12000000){
        all = (Number(thuNhap) - Number(thuNhap) * 0.66) -  (Number(soNguoi) * 0.01 * Number(thuNhap));
    }
    else if (thuNhap > 12000000 && thuNhap <= 21000000){
        all = (Number(thuNhap) - Number(thuNhap) * 0.66) -  (Number(soNguoi) * 0.015 * Number(thuNhap));
    }
    else if (thuNhap > 21000000 && thuNhap <= 38400000){
        all = (Number(thuNhap) - Number(thuNhap) * 0.66) -  (Number(soNguoi) * 0.02 * Number(thuNhap));
    }
    else if (thuNhap > 38400000 && thuNhap <= 62400000){
        all = (Number(thuNhap) - Number(thuNhap) * 0.66) -  (Number(soNguoi) * 0.025 * Number(thuNhap));
    }
    else if(thuNhap > 62400000 && thuNhap <= 96000000){
        all = (Number(thuNhap) - Number(thuNhap) * 0.66) -  (Number(soNguoi) * 0.03 * Number(thuNhap));
    }
    else if(thuNhap >= 96000000){
        all = (Number(thuNhap) - Number(thuNhap) * 0.66) -  (Number(soNguoi) * 0.05 * Number(thuNhap));
    }
    else{
        alert("vui lòng nhập lại thu nhập 1 năm");
    }

    return all;
}