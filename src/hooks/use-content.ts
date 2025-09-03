import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type TMDBMovie, type ContentItem } from "@/shared/schema";
import { mapToContentItems } from "@/shared/utils";

type FetchFn = () => Promise<{ results: TMDBMovie[] }>;

export const useContentQuery = (
  key: string,
  fetchFn: FetchFn,
  options?: Partial<UseQueryOptions<ContentItem[], Error>>
) => {
  return useQuery<ContentItem[], Error>({
    queryKey: [key],
    queryFn: async () => {
      const rawContents = await fetchFn();
      return mapToContentItems(rawContents.results);
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    ...options,
  });
};
