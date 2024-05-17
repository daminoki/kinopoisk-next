type Timer = ReturnType<typeof setTimeout>;

export default function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout: number = 300,
): (...args: Parameters<T>) => void {
  let timer: Timer;

  return function (this: any, ...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
