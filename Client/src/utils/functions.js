export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const randomColorGenerator = () => {
  const string = "12345678ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += string[Math.floor(Math.random() * 13)];
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

export const formatTimestamp = (timestamp) => {
    const currentDate = new Date();
    const inputDate = new Date(timestamp);
    const diff = (currentDate - inputDate) / 1000; 

    const seconds = Math.floor(diff);
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (seconds < 60) {
        return seconds + 's ago';
    } else if (minutes < 60) {
        return minutes + 'm ago';
    } else if (hours < 24) {
        return hours +'h ago';
    } else if (days < 7) {
        return days +'d ago';
    } else {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = inputDate.getDate();
        const month = months[inputDate.getMonth()];
        const year = inputDate.getFullYear();
        return day + ' ' + month + ' ' + year;
    }
}

