const DateNow = new Date();

const Seconds = DateNow.getSeconds();
const Minutes = DateNow.getMinutes();
const Hours = DateNow.getHours();
const Days = DateNow.getDay();
const Month = DateNow.getMonth();
const Years = DateNow.getFullYear();

export const Time = `${Hours}:${Minutes}`;
export const CalendarDays = `${Days}.${Month}.${Years}`