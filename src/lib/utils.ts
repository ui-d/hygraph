import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractYouTubeID(url: string): string {
  if (url.includes('youtu.be')) {
    return url.split('youtu.be/')[1];
  } else if (url.includes('youtube.com')) {
    return new URL(url).searchParams.get('v') || '';
  }
  return '';
}
