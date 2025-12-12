export function faToEnDigits(str: string): string {
  const fa = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const ar = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  return str
    .split("")
    .map((ch) => {
      if (fa.includes(ch)) return fa.indexOf(ch).toString();
      if (ar.includes(ch)) return ar.indexOf(ch).toString();
      return ch;
    })
    .join("");
}
