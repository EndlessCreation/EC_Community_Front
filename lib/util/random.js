export const getRandomColor = (title) => {
  const colors = ['#FFB49D', '#FFAAB4', '#FF9898', '#87EEC3', '#B9EEFF', '#9CC4FF', '#BEC7FF'];
  return colors[title.length % colors.length];
};
