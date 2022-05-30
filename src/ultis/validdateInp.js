export default function validateInp(name) {
  if (!name || name === '') return 'Tên không được để trống';
  if (/[!@#$%^&*()]/.test(name)) return 'Tên không được chứa ký tự đặc biệt';
  return true;
}
