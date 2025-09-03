export interface ContentItem {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  bannerUrl: string;
  type: "movie" | "tv_show";
  releaseYear: number;
  duration?: number | null;
  rating?: string | null;
  videoUrl: string;
  seasons?: number | null;
  createdAt: Date;
}

export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface WatchProgress {
  id: number;
  userId: number;
  contentId: number;
  episodeId: number | null;
  progress: number;
  completed: boolean;
  updatedAt: Date;
}
