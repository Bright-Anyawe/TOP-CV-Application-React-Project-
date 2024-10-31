export function GetDate({
  updateStudiesDate,
  updateJobEntryDate,
  updateJobExitDate,
}) {
  let date;
  if (updateStudiesDate) {
    date = new Date(updateStudiesDate);
  } else if (updateJobEntryDate) {
    date = new Date(updateJobEntryDate);
  } else {
    date = new Date(updateJobExitDate);
  }

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const dayOfWeek = date.toLocaleDateString("en-Us", options);
  return dayOfWeek;
}
