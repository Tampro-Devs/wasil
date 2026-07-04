import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../../../../utils/cn";
import { toDate } from "../../../../../utils/globals";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type View = "calendar" | "month" | "year";

interface DatePickerFieldProps {
  value?: Date;
  onChange: (value: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  minYear?: number;
  maxYear?: number;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isToday(d: Date) {
  return isSameDay(d, new Date());
}

function formatDate(d: Date) {
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
}

function getDaysInMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate();
}

function getFirstDay(y: number, m: number) {
  return new Date(y, m, 1).getDay();
}

export function AppDatePickerField({
  value,
  onChange,
  disabled,
  placeholder = "Select a date",
  minYear = 1900,
  maxYear = 2100,
}: DatePickerFieldProps) {
  const today = new Date();
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedDate = toDate(value);

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("calendar");

  const [viewYear, setViewYear] = useState(
    selectedDate?.getFullYear() ?? today.getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    selectedDate?.getMonth() ?? today.getMonth(),
  );
  const [yearPage, setYearPage] = useState(
    Math.floor((selectedDate?.getFullYear() ?? today.getFullYear()) / 12),
  );

  // close outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setView("calendar");
      }
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (value) {
      setViewYear(value.getFullYear());
      setViewMonth(value.getMonth());
      setYearPage(Math.floor(value.getFullYear() / 12));
    }
  }, [value]);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDay(viewYear, viewMonth);

  const cells: (number | null)[] = useMemo(() => {
    const arr = [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [firstDay, daysInMonth]);

  const years = useMemo(() => {
    const start = yearPage * 12;
    const end = Math.min(start + 12, maxYear + 1);

    return Array.from({ length: end - start }, (_, i) => start + i).filter(
      (y) => y >= minYear && y <= maxYear,
    );
  }, [yearPage, minYear, maxYear]);

  function selectDate(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    onChange(d);
    setOpen(false);
    setView("calendar");
  }

  function clear() {
    onChange(undefined);
  }

  function todayClick() {
    const d = new Date();
    onChange(d);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full select-none">
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          setOpen((v) => !v);
          setView("calendar");
        }}
        className="mb-3 flex w-full items-center rounded-xl border border-slate-300 bg-slate-300/30 p-2 text-sm"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value ? formatDate(value) : placeholder}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-[288px] rounded-2xl border bg-white p-4 shadow-2xl">
          {/* CALENDAR */}
          {view === "calendar" && (
            <>
              <div className="mb-3 flex justify-between">
                <button
                  onClick={() => setViewMonth((m) => (m === 0 ? 11 : m - 1))}
                >
                  ‹
                </button>

                <div className="flex gap-2">
                  <button onClick={() => setView("month")}>
                    {MONTHS[viewMonth].slice(0, 3)}
                  </button>

                  <button
                    onClick={() => {
                      setYearPage(Math.floor(viewYear / 12));
                      setView("year");
                    }}
                  >
                    {viewYear}
                  </button>
                </div>

                <button
                  onClick={() => setViewMonth((m) => (m === 11 ? 0 : m + 1))}
                >
                  ›
                </button>
              </div>

              <div className="grid grid-cols-7 text-center text-xs">
                {DAY_LABELS.map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {cells.map((day, i) =>
                  !day ? (
                    <div key={i} />
                  ) : (
                    <button
                      key={i}
                      type="button"
                      onClick={() => selectDate(day)}
                      className={cn(
                        "h-8 text-sm",
                        value &&
                          isSameDay(new Date(viewYear, viewMonth, day), value)
                          ? "bg-blue-900 text-white"
                          : isToday(new Date(viewYear, viewMonth, day))
                            ? "border border-blue-300"
                            : "",
                      )}
                    >
                      {day}
                    </button>
                  ),
                )}
              </div>

              <div className="mt-3 flex justify-between text-xs">
                <button onClick={todayClick}>Today</button>
                {value && <button onClick={clear}>Clear</button>}
              </div>
            </>
          )}

          {/* MONTH */}
          {view === "month" && (
            <div className="grid grid-cols-3 gap-2">
              {MONTHS.map((m, i) => (
                <button
                  key={m}
                  onClick={() => {
                    setViewMonth(i);
                    setView("calendar");
                  }}
                >
                  {m.slice(0, 3)}
                </button>
              ))}
            </div>
          )}

          {/* YEAR */}
          {view === "year" && (
            <div className="grid grid-cols-3 gap-2">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => {
                    setViewYear(y);
                    setView("month");
                  }}
                >
                  {y}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
