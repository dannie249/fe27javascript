/*
    Quan Ly Nhan Vien:
    -- Them nhan vien
    
*/

// var nhanVien = new NhanVien("004", "Denise", "abc@mail.re", "123", "24.2", "Sep");//từ khoá new để cho JS biết đây là hàm constructor 
// console.log(nhanVien);

var mangNhanVien = [];
function getEle(id){
    return document.getElementById(id);
}

var jsonData = localStorage.getItem("DSNV");
//chuyen kieu du lieu
mangNhanVien = JSON.parse(jsonData);
HienThi(mangNhanVien);

function LayThongTin(){
    //lay thong tin
    var maNV = getEle('msnv').value;
    var hoTenNV = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngaySinh = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;
    
    //tao doi tuong
    var nhanVien = new NhanVien(maNV, hoTenNV, email, matKhau, ngaySinh, chucVu);
    nhanVien.tinhTongLuong();

    return nhanVien;
}
function themNhanVien(){
    var nhanVien = LayThongTin();
    // them vao mang
    mangNhanVien.push(nhanVien);
    console.log(mangNhanVien);

    //Hien Thi
    HienThi(mangNhanVien);
}

function HienThi(mangHienThi){
    var tableDanhSach = getEle("tableDanhSach");
    var content = "";
    for(var i = 0; i < mangHienThi.length; i++){
        var nhanVien = mangHienThi[i];
        //template string ``
        content += `
            <tr>
                <td>${nhanVien.maNhanVien}</td>
                <td>${nhanVien.tenNhanVien}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngaySinh}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>
                    <button 
                    class="btn btn-danger" data-id="${nhanVien.maNhanVien}" 
                    onclick="XoaNhanVien(event)">Xoá</button>
                    <button
                     data-toggle="modal"
                     data-target="#myModal"
                    class="btn btn-info" data-id="${nhanVien.maNhanVien}"
                    onclick="HienThiThongTinLenForm(event)">Sửa</button>
                </td>
            </tr>
        `
    }
    tableDanhSach.innerHTML = content;
}

//local storage : quan trong - chỉ nhận kiểu dữ liệu là chuỗi JSON 
function LuuDuLieu() {
    //chuyển kiểu dữ liệu về kiểu JSON - quan trong - cac phuong thuc deu bi xoa
    var jsonData = JSON.stringify(mangNhanVien);

    //lưu vào local storage : key value
    localStorage.setItem("DSNV", jsonData);

    
}

function LayDuLieu() {
    //lay du lieu tu local storage
    
}

function TimViTri(id){
    //lay tung nhan vien ra bang cach duyet mang
    for(var i = 0; i < mangNhanVien.length; i ++){
        var nhanVien = mangNhanVien[i];
        if(nhanVien.maNhanVien === id){
            return i; //khi return thi ra khoi ham luon 
        }
    }
    return -1;
}
//xoa nhan vien
function XoaNhanVien(event){
    //lay id can xoa
    var btnXoa = event.target;
    var idXoa = btnXoa.getAttribute("data-id");

    //tim vi tri can xoa
    var index = TimViTri(id);

    //xoa 
    mangNhanVien.splice(index,1); //xoa xong de gia tri len mang cu 
    HienThi(mangNhanVien);
}

//CapNhat
function HienThiThongTinLenForm(event){
    var btnSua = event.target;
    var idSua = btnSua.getAttribute("data-id");
    var index = TimViTri(idSua);
    var nhanVien = mangNhanVien[index];

    //HienThi
    getEle("msnv").value = nhanVien.maNhanVien;
    getEle("name").value = nhanVien.tenNhanVien;
    getEle("password").value = nhanVien.matKhau;
    getEle("datepicker").value = nhanVien.ngaySinh;
    getEle("email").value = nhanVien.email;
    getEle("chucvu").value = nhanVien.chucVu;
    
    getEle("msnv").setAttribute("readonly",true); 

}

function CapNhatThongTin(){
    var nhanVien = LayThongTin();

    //de len doi luong can sua
    var index = TimViTri(nhanVien.maNhanVien);
    mangNhanVien[index] = nhanVien;
    HienThi();
}

//tim nhan vien
function TimNhanVien(){
    var mangNhanVienTimKiem = [];
    var keyword = getEle("searchName").value;
    keyword = keyword.toLowerCase().replace(/\s/g,'');
    for(var i = 0; i < mangNhanVien.length; i++){
        if(mangNhanVien[i].tenNhanVien === keyword){
            mangNhanVienTimKiem.push(mangNhanVien[i]);
        }
    }
    HienThi(mangNhanVienTimKiem);

}

//goi ham (thay cho onclick ben html) callback function đợi sự kiện nào đó xảy ra xong mới thực hiện 
getEle("btnThemNV").addEventListener("click",themNhanVien);

// getEle("btnThemNV").addEventListener("click",function(){ //anonimous function
//     themNhanVien(abc);
// });

getEle("btnLayDuLieu").addEventListener("click", LayDuLieu);
getEle("btnLuuDuLieu").addEventListener("click", LuuDuLieu);
getEle("btnCapNhat").addEventListener("click", CapNhatThongTin);
getEle("btnTimNV").addEventListener("click", TimNhanVien);