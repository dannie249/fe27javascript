var mangNhanVien =  [];

function themNguoiDung(){
    console.log("them nguoi dung");
}

function getEle(id){
    return document.getElementById(id);
}

function themNhanVien(){
    //lay thong tin
    var maNV = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngaySinh = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    //to chuc thanh mot doi tuong
    var nhanVien = new NhanVien(maNV,tenNV,email,matKhau,ngaySinh,chucVu);
    nhanVien.tinhTongLuong();

    //them vao mang
    mangNhanVien.push(nhanVien);
    console.log(mangNhanVien);

    //hien thi len giao dien
    HienThi();
}

function HienThi(){
    var tableDanhSach = getEle("tableDanhSach");
    var content = "";

    for(var i = 0; i < mangNhanVien.length; i++){
        var nhanVien = mangNhanVien[i];
        content += `
            <tr>
                <td>${nhanVien.maNhanVien}</td>
                <td>${nhanVien.tenNhanVien}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngaySinh}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <button class="btn btn-danger">Xoá</button>
                <button class="btn btn-info">Sửa</button>
            </tr>
        `
        tableDanhSach.innerHTML = content;
    }
}

function luuDuLieu(){
    var jsonData = JSON.stringify(mangNhanVien);
    localStorage.setItem("DSNV",jsonData);
}

//goi ham
getEle("btnThemNV").addEventListener("click", themNhanVien);
getEle("btnLuuDuLieu").addEventListener("click", luuDuLieu);