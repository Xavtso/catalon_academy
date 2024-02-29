import { AppDispatch } from "../types";

export function handleWindowResizing() {
  return (dispatch: AppDispatch) => {};
}

export function formatDateToMonthDay(dateString: string) {
  const date = new Date(dateString);
  const options = { month: "short" as const, day: "numeric" as const };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}

export function formatTimeTo12Hour(timeString: string){
  const time = new Date(`1970-01-01T${timeString}`);
  const options = {
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    hour12: true as const,
  };
  const formattedTime = time.toLocaleTimeString("en-US", options);
  return formattedTime;
}
