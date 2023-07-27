const KHU__1 = 1;
const KHU__2 = 2;
const KHU__3 = 3;
const DOI__TUONG1 = 1;
const DOI__TUONG2 = 2;
const DOI__TUONG3 = 3;

function main() {
    var diemMon1 = document.getElementById("diemMon1").value;
    var diemMon2 = document.getElementById("diemMon2").value;
    var diemMon3 = document.getElementById("diemMon3").value;
    var diemDT = document.getElementById("doiTuong").value;
    var diemKV = document.getElementById("khuVuc").value;

    // console.log(diemMon1,diemMon2,diemMon3,diemDT,diemKV);

    tinhDiem3mon(diemMon1,diemMon2,diemMon3);
    // console.log(tinhDiem3mon(diemMon1,diemMon2,diemMon3));

    tinhDiemUt(diemKV,diemDT);
    // console.log(tinhDiemUt(diemKV,diemDT));

    //! c1:
    // var tongDiem = tinhDiem3mon(diemMon1,diemMon2,diemMon3) + tinhDiemUt(diemKV,diemDT);
    // if (tongDiem >= 25) {
    //     document.getElementById("txtTinh").innerHTML = tongDiem + "<h1>CHÚC MỪNG EM ĐÃ ĐẬU!</h1>";
    // } else {
    //     document.getElementById("txtTinh").innerHTML = tongDiem + "<h1>NGU!</h1>";
    // }

    //! c2:
    ketQua(tinhDiem3mon(diemMon1,diemMon2,diemMon3),tinhDiemUt(diemKV,diemDT))
    
}

function tinhDiem3mon(mon1,mon2,mon3) {
    var tong3diem = 0;

    tong3diem = Number(mon1) + Number(mon2) + Number(mon3);

    return tong3diem;
}

function tinhDiemUt(kV, dT) {
    var tongUt = 0;

    tongUt = Number(kV) + Number(dT);

    return tongUt;
}

function ketQua(tong3diem, tongUt) {

    var ketQua = tong3diem + tongUt;

    if (ketQua >= 25) {
        document.getElementById("txtTinh").innerHTML = ketQua + "<h1>CHÚC MỪNG EM ĐÃ ĐẬU!</h1>";
    } else {
        document.getElementById("txtTinh").innerHTML = ketQua + "<h1>NGU!</h1>";
    }
    return ketQua;
}
