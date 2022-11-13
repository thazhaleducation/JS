function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "SUNDAY";
    case 2:
      return "MONDAY";
    case 3:
      return "TUESDAY";
    case 4:
      return "WEDNESDAY";
    case 5:
      return "THURSDAY";
    case 6:
      return "FRIDAY";
    case 7:
      return "SATURDAY";
    default:
      return "WRONG DAY OF WEEK";
  }
}
console.log(getDayOfWeek(1));
console.log(getDayOfWeek(2));