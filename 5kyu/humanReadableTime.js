function humanReadable(seconds) {
  let hours = "" + Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = "" + Math.floor(seconds / 60);
  let secs = "" + Math.floor(seconds % 60);
  if (hours.length < 2) {
    hours = `0${hours}`;
  }
  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }
  if (secs.length < 2) {
    secs = `0${secs}`;
  }
  return `${hours}:${minutes}:${secs}`;
}

console.log(humanReadable(0), "00:00:00", "humanReadable(0)");
console.log(humanReadable(5), "00:00:05", "humanReadable(5)");
console.log(humanReadable(60), "00:01:00", "humanReadable(60)");
console.log(humanReadable(86399), "23:59:59", "humanReadable(86399)");
console.log(humanReadable(359999), "99:59:59", "humanReadable(359999)");
