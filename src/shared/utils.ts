import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ContentItem, TMDBMovie } from "./schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapToContentItems(contents: TMDBMovie[]): ContentItem[] {
  return contents.map((item: TMDBMovie) => ({
    id: item.id,
    title: item.title,
    description: item.overview,
    thumbnailUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    bannerUrl: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
    type: "movie",
    releaseYear: new Date(item.release_date).getFullYear(),
    duration: null,
    rating: null,
    videoUrl: "",
    seasons: null,
    createdAt: new Date(),
  }));
}
