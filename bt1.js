/**
 * Phân tích 3 khối
 * - Đầu vào: Số ngày làm , lương/ngày
 * - Xử lý: tính tổng lương làm = ngày làm * lương/ngày
 * - Đầu ra: Cho ra thông tin tổng lương
 */

let btnTongLuong = document.getElementById("btnTongLuong");
btnTongLuong.onclick = function () {
    let luongNgay = document.getElementById("luongNgay").value;
    let soNgayLam = document.getElementById("soNgayLam").value;
    let tongLuong = 0;
    tongLuong = luongNgay * soNgayLam;
    let result = "Tổng Lương: " + tongLuong;
    let pOutPutLuong = document.getElementById("outPutLuong");
    pOutPutLuong.innerText = result;
    pOutPutLuong.classList.add("");
};