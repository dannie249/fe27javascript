// //Tao lop doi tuong nhan vien
// function NhanVien(maNV, hoTenNV, email, matKhau, ngaySinh, chucVu){
//     this.maNhanVien = maNV;
//     this.tenNhanVien = hoTenNV;
//     this.email = email;
//     this.matKhau = matKhau;
//     this.ngaySinh = ngaySinh;
//     this.chucVu = chucVu;
//     this.LuongCB = 400;
//     this.tongLuong = 0;
//     //tong luong = he so luong * luong co ban
//     this.tinhTongLuong = function(){
//         if(this.chucVu === "Sếp"){
//             this.tongLuong = this.LuongCB * 3;
//         }
//         else if(this.chucVu === "Trưởng phòng"){
//             this.tongLuong = this.LuongCB * 1.5;
//         }
//         else if(this.chucVu === "Nhân viên"){
//             this.tongLuong = this.LuongCB;
//         }
//     }
// }

function NhanVien(maNV,tenNV,email,matKhau,ngaySinh,chucVu){
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngaySinh;
    this.chucVu = chucVu;
    this.luongCB = 500;
    this.tongLuong = 0;
    this.tinhTongLuong = function(){
        if(this.chucVu === "Sếp"){
            this.tongLuong = this.luongCB * 3;
        }
        else if(this.chucVu === "Trưởng phòng"){
            this.tongLuong = this.luongCB * 1.5;
        }
        else if(this.chucVu === "Nhân viên"){
            this.tongLuong = this.luongCB;
        }
    }
}
