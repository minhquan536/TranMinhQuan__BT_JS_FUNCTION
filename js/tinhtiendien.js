const TIENDIEN1     = 500;
// tongTien * 500
const TIENDIEN2    = 650;
// (tongTien-50) * 650 + TIENDIEN1*50
const TIENDIEN3    = 850;
// (tongTien-100) * 850 + TIENDIEN1*50 + TIENDIEN2*50
const TIENDIEN4     = 1100;
// (tongTien-200) * 1100 + TIENDIEN1*50 + TIENDIEN2*50 + TIENDIEN3*100
const TIENDIEN5     = 1300;
// (tongTien-350)*1300 + TIENDIEN1*50 + TIENDIEN2*50 + TIENDIEN3*100 + TIENDIEN4*150



function tinhtiendien() {
    var ten = document.getElementById("hoTen").value;
    var dC = document.getElementById("diaChi").value;
    var soDien = document.getElementById("soDien").value;

    mathDien(soDien);

    document.getElementById("txtTinhDien").innerHTML = "Họ và tên: " + ten + "<br>" + "Địa chỉ: " + dC + "<br> Tổng tiền điện tháng này: " + mathDien(soDien).toLocaleString()+" VNĐ";

    // console.log(ten,dC,soDien);
    
}

function mathDien(tongTien) {
    var all = 0;

    if (tongTien < 50) {
        all = tongTien * 500;
    } else if(tongTien < 100){
        all = (tongTien-50) * 650 + TIENDIEN1*50;
    }else if(tongTien < 200){
        all = (tongTien-100) * 850 + TIENDIEN1*50 + TIENDIEN2*50;
    }else if(tongTien < 350){
        all = (tongTien-200) * 1100 + TIENDIEN1*50 + TIENDIEN2*50 + TIENDIEN3*100;
    }else if(tongTien > 350){
        all = (tongTien-350)*1300 + TIENDIEN1*50 + TIENDIEN2*50 + TIENDIEN3*100 + TIENDIEN4*150;
    }

    return all;
}