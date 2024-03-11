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

export const formatDate = (inputDateStr) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(inputDateStr);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  const formattedDate = `${month} ${day}, ${year}, ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  return formattedDate;
};
