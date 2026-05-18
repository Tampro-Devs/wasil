import { useMemo } from "react";

export function useFindBy<T, K extends keyof T>(
  list: T[],
  key: K,
  value: T[K],
): T[] | [] {
  return useMemo(
    () => list.filter((item) => item[key] === value),
    [list, key, value],
  );
}
