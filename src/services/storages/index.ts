export function getFromSessionStorage(key: string): string | undefined {
  const data = sessionStorage.getItem(key);
  return data ? data : undefined;
}

export function setSessionStorage<T>(key: string, value: T): boolean {
  try {
    const val = JSON.stringify(value);
    sessionStorage.setItem(key, val);
    return true;
  } catch (error) {
    return false;
  }
}

export function getFromLocalStorage(key: string): string | undefined {
  const data = localStorage.getItem(key);
  return data ? data : undefined;
}

export function setLocalStorage<T>(key: string, value: T): boolean {
  try {
    const val = JSON.stringify(value);
    localStorage.setItem(key, val);

    return true;
  } catch (error) {
    return false;
  }
}
