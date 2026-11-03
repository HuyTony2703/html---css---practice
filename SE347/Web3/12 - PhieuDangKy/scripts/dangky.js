function inThongBao() {
  const form = document.getElementById('frmPhieuDangKy');
  const f = form.elements;
  const products = Array.from(f.selSanPham.selectedOptions, option => option.text).join('; ');
  alert('Họ tên: ' + f.txtHoTen.value + '\nĐịa chỉ: ' + f.txaDiaChi.value + '\nEmail: ' + f.txtEmail.value + '\nĐiện thoại: ' + f.txtDienThoai.value + '\nGiới tính: ' + f.rdoGioiTinh.value + '\nNghề nghiệp: ' + f.selNgheNghiep.value + '\nChọn sản phẩm: ' + products + '\nDự đoán số người tham gia: ' + f.numDuDoan.value);
}
function lamLai() { document.getElementById('lblThongBao').textContent = ''; document.getElementById('txtHoTen').focus(); }
document.getElementById('frmPhieuDangKy').addEventListener('submit', function(event) { event.preventDefault(); inThongBao(); });
document.getElementById('frmPhieuDangKy').addEventListener('reset', lamLai);
