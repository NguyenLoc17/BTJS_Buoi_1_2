/**
 * Sơ đồ 3 khối 
 * - Đầu vào: nhập vào 5 số 
 * - Xử lý: tính giá trị trung bình 5 số  = sum /5
 * - Đầu ra: Xuất giá trị trung bình ra màn hình 
 */
let btnTB = document.getElementById("btnTB");
btnTB.onclick = function () {
    let number_1 = document.getElementById("number_1").value;
    let number_2 = document.getElementById("number_2").value;
    let number_3 = document.getElementById("number_3").value;
    let number_4 = document.getElementById("number_4").value;
    let number_5 = document.getElementById("number_5").value;
    let sum = parseFloat(number_1) + parseFloat(number_2) + parseFloat(number_3) + parseFloat(number_4) + parseFloat(number_5);
    let result = sum / 5;
    let pInform = document.getElementById("pInform");
    pInform.innerText = "Trung Bình 5 số là: " + result;
};