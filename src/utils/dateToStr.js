const dateToStr = (date) => {
  let dateMDY = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return dateMDY.toString();
};

export default dateToStr;
