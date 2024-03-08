export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const randomColorGenerator = () => {
  const string = "12345678ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // console.log(Math.floor(Math.random * 13));
    // console.log(string[Math.floor(Math.random() * 13)]);
    // console.log(string[0]);
    color += string[Math.floor(Math.random() * 13)];
    console.log(color);
  }
  return color;
};
