import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper untuk menambahkan basePath ke asset paths
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/personal-web" : "";
  return `${basePath}${path}`;
}
