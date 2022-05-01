export default function AuthHeader() {
  let token = sessionStorage.getItem("jwtToken");
  return `Bearer ${token}`;
}
