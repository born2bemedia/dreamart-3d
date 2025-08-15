'use client';

import { useEffect, useState } from 'react';

import st from './Calendar.module.scss';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export type CalendarProps = {
  value?: Date;
  onChange?: (date: Date) => void;
};

export const Calendar = ({ value, onChange }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  useEffect(() => {
    if (value) {
      setCurrentDate(value);
      setSelectedDate(value);
    }
  }, [value]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const updateDate = (newDate: Date) => {
    setCurrentDate(newDate);
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  const prevMonth = () => updateDate(new Date(year, month - 1, 1));
  const nextMonth = () => updateDate(new Date(year, month + 1, 1));

  // const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>) =>
  //   updateDate(new Date(year, Number(e.target.value), 1));

  // const changeYear = (e: React.ChangeEvent<HTMLSelectElement>) =>
  //   updateDate(new Date(Number(e.target.value), month, 1));

  // const monthOptions = Array.from({ length: 12 }, (_, i) => i);
  // const yearOptions = Array.from({ length: 10 }, (_, i) => year - 5 + i);

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className={st.day}></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayDate = new Date(year, month, i);
    const isSelected =
      selectedDate &&
      dayDate.getFullYear() === selectedDate.getFullYear() &&
      dayDate.getMonth() === selectedDate.getMonth() &&
      dayDate.getDate() === selectedDate.getDate();

    calendarDays.push(
      <div
        key={i}
        className={st.day}
        onClick={() => updateDate(dayDate)}
        style={isSelected ? { background: '#2a2b2e', color: '#fff', borderRadius: '4px' } : {}}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={st.calendar}>
      <div className={st.header}>
        <button type="button" onClick={prevMonth} className={st.navButton}>
          {'<'}
        </button>
        {/* <select value={month} onChange={changeMonth}>
          {monthOptions.map((m) => (
            <option key={m} value={m}>
              {new Date(0, m).toLocaleString('default', { month: 'short' })}
            </option>
          ))}
        </select>
        <select value={year} onChange={changeYear}>
          {yearOptions.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select> */}
        <button type="button" onClick={nextMonth} className={st.navButton}>
          {'>'}
        </button>
      </div>
      <div className={st.weekDays}>
        {daysOfWeek.map((day) => (
          <div key={day} className={st.dayOfWeek}>
            {day}
          </div>
        ))}
      </div>
      <div className={st.days}>{calendarDays}</div>
    </div>
  );
};
