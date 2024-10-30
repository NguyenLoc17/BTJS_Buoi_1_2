/** sơ đồ 3 khối
 * - Đầu vào: Nhap vao chiều dài + rộng
 * - Xử lý: tính chu vi ( dài + rộng )*2 và diện tích (dài * rộng)
 * - Đầu ra: Hien thi chu vi + diện tích
 */

let btnDienTich = document.getElementById("btnDienTich");
btnDienTich.onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value*1;
    let chieuRong = document.getElementById("chieuRong").value*1;
    let dienTich = chieuDai * chieuRong;
    let showDienTich = document.getElementById("showDienTich").innerHTML = "Diện tích: " + dienTich;
};

let btnChuVi = document.getElementById("btnChuVi");
btnChuVi.onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value*1;
    let chieuRong = document.getElementById("chieuRong").value*1;
    let chuVi = (chieuDai + chieuRong) * 2;
    let showChuVi = document.getElementById("showChuVi").innerHTML = "Chu Vi: " + chuVi;
};