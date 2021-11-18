export function secondsToString(totalSeconds: number): string {
  let hours: number | string = Math.floor(totalSeconds / 3600);
  let minutes: number | string = Math.floor(totalSeconds / 60);
  let seconds: number | string = Math.floor(totalSeconds);
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) hours = "0" + minutes;
  if (seconds < 10) hours = "0" + seconds;
  if (seconds > 59) seconds = totalSeconds = 0;
  const timeString: string = `${hours}:${minutes}:${seconds}`;
  return timeString;
}
