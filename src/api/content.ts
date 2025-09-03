import { STAPI_ENDPOINTS } from "@/shared/constants";
import { stapi } from "./base";

export const getFeaturedContents = async () => {
  const { data } = await stapi.get(STAPI_ENDPOINTS.CONTENT.GET_FEATURED, {
    params: {
      language: "en-US",
    },
  });
  return data;
};

export const getLatestReleases = async () => {
  const { data } = await stapi.get(
    STAPI_ENDPOINTS.CONTENT.GET_LATEST_RELEASES,
    {
      params: {
        language: "en-US",
        page: 1,
      },
    }
  );
  return data;
};

export const getTopRated = async () => {
  const { data } = await stapi.get(STAPI_ENDPOINTS.CONTENT.GET_TOP_RATED, {
    params: {
      language: "en-US",
      page: 1,
    },
  });
  return data;
};
