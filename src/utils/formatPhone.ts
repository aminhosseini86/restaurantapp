import { faToEnDigits } from "./faToEnDigits";

export function formatPhone(phone: string) {
  const clean = faToEnDigits(phone).replace(/\D/g, "");

  if (clean.length !== 11) return clean;

  const part1 = clean.slice(0, 3);
  const part2 = clean.slice(3, 7);
  const part3 = clean.slice(7, 11);

  return `${part1} ${part2} ${part3}`;
}
