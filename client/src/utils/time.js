export const getTime = () => {
  const time = new Date().getHours();
  console.log(time);
  if (time >= 22 || time < 5) {
    return "You should be in bed 👀";
  }
  if (time >= 5 && time < 12) {
    return "Good Morning";
  }
  if (time >= 12 && time < 17) {
    return "Good Afternoon";
  }
  if (time >= 17 && time < 22) {
    return "Good Evening";
  }
};
