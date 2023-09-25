const daysOverlap = (days1, days2) => {
  for (let day of days1) {
    if (days2.includes(day)) return true;
  }
  return false;
};

const parseTime = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

export const hasCourseConflict = (course1, course2) => {
  const [days1, time1] = course1.meets.split(" ");
  const [days2, time2] = course2.meets.split(" ");

  if (!daysOverlap(days1, days2)) return false;

  const [start1, end1] = time1.split("-").map(parseTime);
  const [start2, end2] = time2.split("-").map(parseTime);

  return (
    (start1 >= start2 && start1 < end2) ||
    (end1 > start2 && end1 <= end2) ||
    (start2 >= start1 && start2 < end1) ||
    (end2 > start1 && end2 <= end1)
  );
};
