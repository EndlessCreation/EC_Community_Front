export function isEmail(asValue) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue);
}

export function isCode(asValue) {
  var regExp = /^[a-zA-Z0-9]*$/gm;
  return regExp.test(asValue);
}

// 8 ~ 16자 영문, 숫자 조합 특수문자 입력가능
export function isPassword(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  return regExp.test(asValue);
}

// 10자 이내
export function isNickname(asValue) {
  var regExp = /^[a-zA-Z0-9가-힣]{1,10}$/;
  return regExp.test(asValue);
}
