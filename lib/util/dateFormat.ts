export function getDateString(date) {
  const now = new Date();
  const ret = new Date(date);
  if (
    now.getFullYear() === ret.getFullYear() &&
    now.getDate() === ret.getDate() &&
    now.getMonth() === ret.getMonth()
  ) {
    return `${ret.getHours().toString().padStart(2, '0')}:${ret
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  } else {
    return `${ret.getFullYear()}.${ret.getMonth() + 1}.${ret.getDate()}`;
  }
}

export function getCommentDateString(createdAt, updatedAt) {
  return !updatedAt ? getDateString(createdAt) : getDateString(updatedAt) + ' (수정됨)';
}

export const getChatDate = (date) => {
  const newDate = new Date(date);
  var nowHour = newDate.getHours();
  var nowMt = newDate.getMinutes();
  var nowYear = newDate.getFullYear();
  var nowMonth = newDate.getMonth() + 1;
  var nowDate = newDate.getDate();

  if (nowHour < 12 && nowHour >= 0) {
    return 'AM ' + nowHour + ':' + nowMt + ' ( ' + nowYear + '.' + nowMonth + '.' + nowDate + ' )';
  } else if (nowHour >= 12 && nowHour < 24) {
    return (
      'PM ' + (nowHour - 12) + ':' + nowMt + ' ( ' + nowYear + '.' + nowMonth + '.' + nowDate + ' )'
    );
  }
};
