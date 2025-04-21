import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

export function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number {
  return (
    ((value - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) +
    outputMin
  );
}

// Helper for random numbers within a range
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Generate a random color from our theme palette
export function getRandomThemeColor(): string {
  const colors = [
    "#1A2980", // primary
    "#26D0CE", // secondary
    "#FF8C42", // accent
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}