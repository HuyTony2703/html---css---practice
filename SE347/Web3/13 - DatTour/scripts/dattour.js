function inThongBao() {
  const f = document.getElementById('frmDatTour').elements;
  const message = 'Bạn đã đăng ký thành công!!!';
  document.getElementById('lblThongBao').textContent = message;
  alert(message + '\nThông tin đăng ký của bạn như sau:\n========================================\nHọ tên: ' + f.txtHoTen.value + '\nĐịa chỉ: ' + f.txaDiaChi.value + '\nĐiện thoại: ' + f.txtDienThoai.value + '\nLoại khách: ' + (f.chkKhachVN.checked ? 'Việt Nam' : 'Nước ngoài') + '\nChọn tour: ' + f.selChonTour.value + '\nPhương tiện: ' + f.phuongtien.value + '\nSố lượng khách đoàn: ' + f.numNguoiLon.value + ' người lớn - ' + f.numTreEm.value + ' trẻ em\nGhi chú thêm: ' + f.txaGhiChu.value);
}
document.getElementById('frmDatTour').addEventListener('submit', function(event) { event.preventDefault(); inThongBao(); });
