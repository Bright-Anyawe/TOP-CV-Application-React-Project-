export function GetDate({
  updateStudiesDate,
  updateJobEntrytDate,
  updateJobExitDate,
}) {
  let date;
  if (updateStudiesDate) {
    date = new Date(updateStudiesDate);
  } else if (updateJobEntrytDate) {
    date = new Date(updateJobEntrytDate);
  } else {
    date = new Date(updateJobExitDate);
  }
  console.log(date);

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const dayOfWeek = date.toLocaleDateString("en-Us", options);
  console.log(dayOfWeek);
  return dayOfWeek;
}
