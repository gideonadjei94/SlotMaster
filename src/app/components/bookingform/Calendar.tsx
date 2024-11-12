"use client";

import { CalendarProps, useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";
import { DateValue } from "@react-types/calendar";
import { CalendarHeader } from "./CalendarHeader";

export function Calendar(props: CalendarProps<DateValue>) {
  const { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    visibleDuration: {
      months: 1,
    },
    locale,
    createCalendar,
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} className="inline-block">
      <CalendarHeader
        state={state}
        calendarProps={calendarProps}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
    </div>
  );
}
