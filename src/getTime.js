const getTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
};
export default getTime;
