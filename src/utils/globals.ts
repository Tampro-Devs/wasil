import { toast } from "react-toastify";
import type { SelectOption } from "../shared/components/form/fields/app.select.field";

export function shortenNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1).replace(".0", "")}B`;
  }

  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(".0", "")}M`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(".0", "")}k`;
  }

  return value.toString();
}

export const formatMoney = (
  amount: number,
  currency = "TZS",
  locale = "sw-TZ",
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export function shuffle<T>(array: T[]): T[] {
  return [...array] // ← never mutate the original
    .sort(() => Math.random() - 0.5);
}

export function convertStringToDate(dateString: string, locale = "en-US") {
  const formatted = new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatted;
}

export function calculateAge(dateString: string): number {
  const birth = new Date(dateString.replace(/-/g, "/"));
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  return age;
}

export function triggerToast(message: string, category: "success" | "error") {
  const classNames = "text-xs p-0";

  if (category === "success") {
    toast.success(message, { className: classNames });
  } else {
    toast.error(message, { className: classNames });
  }
}

export function toDate(value: unknown): Date | undefined {
  if (!value) return undefined;
  if (value instanceof Date && !isNaN(value.getTime())) return value;

  const d = new Date(value as any);
  return isNaN(d.getTime()) ? undefined : d;
}

export function toSelectOptions<
  T,
  LabelKey extends keyof T,
  ValueKey extends keyof T,
>(items: T[], labelKey: LabelKey, valueKey: ValueKey): SelectOption[] {
  return items.map((item) => ({
    label: String(item[labelKey]),
    value: String(item[valueKey]),
  }));
}
