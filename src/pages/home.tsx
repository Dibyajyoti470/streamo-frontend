import ContentRow from "@/components/content/content-row";
import HeroBanner from "@/components/content/hero-banner";
import { Skeleton } from "@/components/ui/skeleton";
import { useContentQuery } from "@/hooks/use-content";
import { getFeaturedContents, getLatestReleases, getTopRated } from "@/api";

export default function Home() {
  const { data: featuredContents, isLoading: isLoadingFeatured } =
    useContentQuery("featuredContents", getFeaturedContents);

  const { data: latestReleases, isLoading: isLoadingLatestReleases } =
    useContentQuery("latestReleases", getLatestReleases);

  const { data: topRated, isLoading: isLoadingTopRated } = useContentQuery(
    "topRated",
    getTopRated
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Banner */}
      {isLoadingFeatured && (
        <Skeleton className="w-full h-[85vh] rounded-lg"></Skeleton>
      )}
      {!isLoadingFeatured && featuredContents && (
        <HeroBanner contents={featuredContents} />
      )}

      {/* Continue Watching */}
      {latestReleases && (
        <ContentRow
          title="Continue Watching"
          aspectRatio="landscape"
          contents={latestReleases}
          viewAllLink="/browse/latest-releases"
        />
      )}

      {/* Latest Releases */}
      {latestReleases && (
        <ContentRow
          title="Latest Releases"
          contents={latestReleases}
          viewAllLink="/browse/latest-releases"
        />
      )}

      {/* Top Rated */}
      {topRated && (
        <ContentRow
          title="Top Rated"
          contents={topRated}
          viewAllLink="/browse/top-rated"
        />
      )}
    </div>
  );
}
