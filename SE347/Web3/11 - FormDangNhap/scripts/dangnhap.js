function KiemTraNhapLieu() {
  const user = document.getElementById('txtUser');
  const pass = document.getElementById('txtPass');
  const message = document.getElementById('lblThongBao');
  if (!user.value.trim()) { message.textContent = 'Bạn chưa nhập tên người dùng'; user.focus(); return false; }
  if (!pass.value) { message.textContent = 'Bạn chưa nhập mật khẩu'; pass.focus(); return false; }
  if (user.value.trim() === 'Yến Trần' && pass.value === '123456') {
    message.replaceChildren(document.createTextNode('Chào bạn '));
    const name = document.createElement('b'); name.style.fontStyle = 'italic'; name.textContent = user.value.trim(); message.append(name);
    return true;
  }
  message.textContent = 'Thông tin đăng nhập không hợp lệ'; user.focus(); user.select(); return false;
}
function NhapLai() { document.getElementById('form1').reset(); document.getElementById('lblThongBao').textContent = ''; document.getElementById('txtUser').focus(); }
document.getElementById('form1').addEventListener('submit', function(event) { event.preventDefault(); KiemTraNhapLieu(); });
