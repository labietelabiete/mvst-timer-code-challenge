export function secondsToString(totalSeconds: number): string {
  console.log(totalSeconds);
  let hours: number | string = Math.floor(totalSeconds / 3600);
  let minutes: number | string = Math.floor(totalSeconds / 60);
  let seconds: number | string = Math.floor(totalSeconds);
  if (seconds % 60 === 0) seconds = 0;
  if (seconds > 59) seconds = seconds - 60 * minutes;
  if (minutes % 60 === 0) minutes = 0;
  if (minutes > 59) minutes = minutes - 60 * hours;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  const timeString: string = `${hours}:${minutes}:${seconds}`;
  return timeString;
}
