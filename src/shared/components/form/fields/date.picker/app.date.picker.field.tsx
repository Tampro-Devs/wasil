import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../../../../utils/cn";
import { formatDateToString, toDate } from "../../../../../utils/globals";

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
  onChange: (value: string | undefined) => void;
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

function getYearPageStart(year: number, minYear: number) {
  return minYear + Math.floor((year - minYear) / 12) * 12;
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

  const initialYear = selectedDate?.getFullYear() ?? today.getFullYear();
  const initialMonth = selectedDate?.getMonth() ?? today.getMonth();

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("calendar");
  const [viewYear, setViewYear] = useState(initialYear);
  const [viewMonth, setViewMonth] = useState(initialMonth);

  // store the FIRST YEAR in the visible 12-year block
  const [yearPageStart, setYearPageStart] = useState(
    getYearPageStart(initialYear, minYear),
  );

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
    const parsed = toDate(value);
    if (!parsed) return;

    setViewYear(parsed.getFullYear());
    setViewMonth(parsed.getMonth());
    setYearPageStart(getYearPageStart(parsed.getFullYear(), minYear));
  }, [value, minYear]);

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
    const start = Math.max(minYear, yearPageStart);
    const end = Math.min(start + 12, maxYear + 1);

    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [yearPageStart, minYear, maxYear]);

  function selectDate(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    onChange(formatDateToString(d));
    setOpen(false);
    setView("calendar");
  }

  function clear() {
    onChange(undefined);
  }

  function todayClick() {
    const d = new Date();
    onChange(formatDateToString(d));
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
    setYearPageStart(getYearPageStart(d.getFullYear(), minYear));
    setOpen(false);
    setView("calendar");
  }

  function goPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full select-none">
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          setOpen((v) => !v);
          setView("calendar");
        }}
        className="flex w-full items-center rounded-xl border border-slate-300 bg-slate-300/30 p-2 text-sm"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value ? formatDate(toDate(value) ?? value) : placeholder}
        </span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-[288px] rounded-2xl border bg-white p-4 shadow-2xl">
          {view === "calendar" && (
            <>
              <div className="mb-3 flex justify-between">
                <button type="button" onClick={goPrevMonth}>
                  ‹
                </button>

                <div className="flex gap-2">
                  <button type="button" onClick={() => setView("month")}>
                    {MONTHS[viewMonth].slice(0, 3)}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setYearPageStart(getYearPageStart(viewYear, minYear));
                      setView("year");
                    }}
                  >
                    {viewYear}
                  </button>
                </div>

                <button type="button" onClick={goNextMonth}>
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
                          isSameDay(
                            new Date(viewYear, viewMonth, day),
                            toDate(value) ?? value,
                          )
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
                <button type="button" onClick={todayClick}>
                  Today
                </button>
                {value && (
                  <button type="button" onClick={clear}>
                    Clear
                  </button>
                )}
              </div>
            </>
          )}

          {view === "month" && (
            <div className="grid grid-cols-3 gap-2">
              {MONTHS.map((m, i) => (
                <button
                  key={m}
                  type="button"
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

          {view === "year" && (
            <>
              <div className="mb-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    setYearPageStart((prev) => Math.max(minYear, prev - 12))
                  }
                >
                  ‹
                </button>

                <span className="text-sm font-medium">
                  {years[0]} - {years[years.length - 1]}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setYearPageStart((prev) =>
                      prev + 12 <= maxYear ? prev + 12 : prev,
                    )
                  }
                >
                  ›
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => {
                      setViewYear(y);
                      setView("month");
                    }}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
