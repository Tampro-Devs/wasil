import { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";
import {
  get,
  useFormState,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import { useAppFormContext } from "./app.form";

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

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isToday(date: Date) {
  return isSameDay(date, new Date());
}

type View = "calendar" | "month" | "year";

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  value?: Date;
  rules?: RegisterOptions<T>;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  minYear?: number;
  maxYear?: number;
  className?: string;
}

export default function DatePicker<T extends FieldValues>({
  name,
  label,
  value,
  rules,
  onChange,
  placeholder = "Select a date",
  minYear = 1900,
  maxYear = 2100,
  className,
}: DatePickerProps<T>) {
  const form = useAppFormContext<T>();
  const { errors } = useFormState({ control: form.control, name, exact: true });
  const error = get(errors, name);

  const today = new Date();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("calendar");
  const [selected, setSelected] = useState<Date | undefined>(value);
  const [viewYear, setViewYear] = useState(
    selected?.getFullYear() ?? today.getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    selected?.getMonth() ?? today.getMonth(),
  );
  const [yearPage, setYearPage] = useState(
    Math.floor((selected?.getFullYear() ?? today.getFullYear()) / 12),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setView("calendar");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectDate(day: number) {
    const date = new Date(viewYear, viewMonth, day);
    setSelected(date);
    onChange?.(date);
    setOpen(false);
    setView("calendar");
    // form.register(name, rules);
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const yearPageStart = yearPage * 12;
  const yearPageEnd = Math.min(yearPageStart + 12, maxYear + 1);
  const years = Array.from(
    { length: yearPageEnd - yearPageStart },
    (_, i) => yearPageStart + i,
  ).filter((y) => y >= minYear && y <= maxYear);

  function selectYear(y: number) {
    setViewYear(y);
    setView("month");
  }

  function selectMonth(m: number) {
    setViewMonth(m);
    setView("calendar");
  }

  function formatDate(d: Date) {
    return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
  }

  function goToday() {
    const t = new Date();
    setViewYear(t.getFullYear());
    setViewMonth(t.getMonth());
    setSelected(t);
    onChange?.(t);
    setOpen(false);
  }

  function clearDate() {
    setSelected(undefined);
    onChange?.(undefined);
  }

  return (
    <div
      ref={containerRef}
      className={cn("block w-full select-none", className)}
    >
      {label && (
        <label className="ps-3 text-sm text-slate-600 font-bold" htmlFor={name}>
          {label}
        </label>
      )}
      <button
        onClick={() => {
          setOpen((o) => !o);
          setView("calendar");
        }}
        className="flex items-center p-2 rounded-xl border border-slate-300 bg-slate-300/30 focus:outline-none focus:ring-2 focus:ring-blue-900/50 transition-all text-sm cursor-pointer w-full"
      >
        <span className={selected ? "text-gray-800" : "text-gray-400"}>
          {selected ? formatDate(selected) : placeholder}
        </span>
      </button>
      {error && (
        <p
          id={`${String(name)}-error`}
          className="ps-5 text-xs text-red-400"
          role="alert"
        >
          {error.message as string}
        </p>
      )}
      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-[288px]">
          {/* ── Calendar view ── */}
          {view === "calendar" && (
            <>
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={prevMonth}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex gap-1">
                  <button
                    onClick={() => setView("month")}
                    className="px-2 py-1 text-sm font-semibold text-gray-800 rounded-lg hover:bg-indigo-50 hover:text-blue-900 transition cursor-pointer"
                  >
                    {MONTHS[viewMonth]}
                  </button>
                  <button
                    onClick={() => {
                      setYearPage(Math.floor(viewYear / 12));
                      setView("year");
                    }}
                    className="px-2 py-1 text-sm font-semibold text-gray-800 rounded-lg hover:bg-indigo-50 hover:text-blue-900 transition cursor-pointer"
                  >
                    {viewYear}
                  </button>
                </div>

                <button
                  onClick={nextMonth}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Day labels */}
              <div className="grid grid-cols-7 mb-1">
                {DAY_LABELS.map((d) => (
                  <div
                    key={d}
                    className="text-center text-[11px] font-medium text-gray-400 pb-1"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-y-0.5">
                {cells.map((day, i) => {
                  if (!day) return <div key={i} />;
                  const date = new Date(viewYear, viewMonth, day);
                  const isSel = selected && isSameDay(date, selected);
                  const itToday = isToday(date);
                  return (
                    <button
                      key={i}
                      onClick={() => selectDate(day)}
                      className={[
                        "w-full aspect-square rounded-xl text-sm transition-all flex items-center justify-center cursor-pointer",
                        isSel
                          ? "bg-blue-900 text-white font-semibold shadow"
                          : itToday
                            ? "border border-blue-300 text-blue-700 font-medium hover:bg-indigo-50"
                            : "text-gray-700 hover:bg-gray-100",
                      ].join(" ")}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={goToday}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium transition cursor-pointer"
                >
                  Today
                </button>
                {selected && (
                  <button
                    onClick={clearDate}
                    className="text-xs text-gray-400 hover:text-gray-600 transition cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </>
          )}

          {/* ── Month view ── */}
          {view === "month" && (
            <>
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => setView("calendar")}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setYearPage(Math.floor(viewYear / 12));
                    setView("year");
                  }}
                  className="px-2 py-1 text-sm font-semibold text-gray-800 rounded-lg hover:bg-indigo-50 hover:text-blue-700 transition"
                >
                  {viewYear}
                </button>
                <div className="w-8" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {MONTHS.map((m, i) => (
                  <button
                    key={m}
                    onClick={() => selectMonth(i)}
                    className={[
                      "py-2.5 rounded-xl text-sm font-medium transition cursor-pointer",
                      viewMonth === i
                        ? "bg-blue-900 text-white shadow"
                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
                    ].join(" ")}
                  >
                    {m.slice(0, 3)}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── Year view ── */}
          {view === "year" && (
            <>
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => setYearPage((p) => p - 1)}
                  disabled={yearPageStart <= minYear}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 disabled:opacity-30 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="text-sm font-semibold text-gray-700">
                  {yearPageStart} – {yearPageEnd - 1}
                </span>
                <button
                  onClick={() => setYearPage((p) => p + 1)}
                  disabled={yearPageEnd > maxYear}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 disabled:opacity-30 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => selectYear(y)}
                    className={[
                      "py-2.5 rounded-xl text-sm font-medium transition cursor-pointer",
                      viewYear === y
                        ? "bg-blue-900 text-white shadow"
                        : today.getFullYear() === y
                          ? "border border-indigo-300 text-indigo-700 hover:bg-indigo-50"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
                    ].join(" ")}
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
