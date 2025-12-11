export function createRandomNumber(length: number): string {
  const numbers = "0123456789";
  let rand = "";

  for (let i = 0; i < length; i++) {
    rand += numbers[Math.floor(Math.random() * numbers.length)];
  }

  return rand;
}
