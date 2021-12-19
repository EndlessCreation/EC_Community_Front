export function isName(email: string) {
  var regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
  return regExp.test(email);
}

export function isEmail(email: string) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
}
