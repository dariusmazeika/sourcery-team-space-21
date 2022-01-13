export const timeDifference = (time) => {
  const previous = Date.parse(time);
  const current = Date.now();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + "S";
  }
  if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "M";
  }

  if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "H";
  }

  if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + "D";
  }

  if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + "MO";
  }

  return Math.round(elapsed / msPerYear) + "Y";
};
