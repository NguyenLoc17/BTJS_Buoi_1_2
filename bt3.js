/**
 * Sơ đồ 3 khối 
 * - Đầu vào: Nhập số tiền USD 
 * - Xử lý: Tính giá trị quy đổi 
 */

let btnQD = document.getElementById("btnQD");
const qUSD = 23500;
btnQD.onclick = function () {
    let inputUSD = document.getElementById("inputUSD").value;
    let vndQD = inputUSD * qUSD;
    let outputQD = document.getElementById("outputQD");
    outputQD.innerText = inputUSD + " USD = " + vndQD + " VND";
}