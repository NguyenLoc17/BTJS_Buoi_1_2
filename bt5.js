/**
 * Sơ đồ 3 khối
 * - Đầu vào: nhập vào 1 số có 2 chữ số 
 * - Xử lý 
 * Nếu nhập vào một số bé hơn 10 đồng thời lớn hơn 99 -> yêu cầu nhập lại
 * Nếu nhập đúng số từ 10- 99  tiến hành lấy số và tính tổng 2 ký số 
 * - Đầu ra: 
 * Nếu nhập sai -> yêu cầu nhập lại
 * Nếu nhập đúng -> in kết quả
 */

let btnTongKySo = document.getElementById("btnTongKySo");
btnTongKySo.onclick = function () {
    let kySo = document.getElementById("kySo").value * 1;  
    let showTongks = "";
    if (kySo < 10 || kySo > 99) {
        showTongks = document.getElementById("showTongks").innerText = "Vui lòng nhập một số có đúng 2 chữ số!";
        return;
    } else {
        let soDonVi = kySo % 10;
        //  Math.floor để lấy phần nguyên
        let soHangChuc = Math.floor(kySo / 10);  
        let tong = soDonVi + soHangChuc;
        showTongks = document.getElementById("showTongks").innerText = "Tổng 2 chữ số là: " + tong;
    }
};
