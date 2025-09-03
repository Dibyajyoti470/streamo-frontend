export const STAPI_ENDPOINTS = {
  AUTH: {
    REQUEST_OTP: "/api/auth/request-otp",
    VERIFY_OTP: "/api/auth/verify-otp",
    UPDATE_PROFILE: "/api/auth/update-profile",
    SESSION: "/api/auth/session",
  },
  CONTENT: {
    GET_FEATURED: "/trending/movie/day",
    GET_LATEST_RELEASES: "/movie/now_playing",
    GET_TOP_RATED: "/movie/top_rated",
    GET_BY_ID: (id: number) => `/api/content/${id}`,
    GET_EPISODES: (id: number) => `/api/content/${id}/episodes`,
    GET_EPISODE: (id: number) => `/api/episode/${id}`,
    CATEGORIES: "/api/categories",
    SEARCH: "/api/search",
  },
  USER: {
    CONTINUE_WATCHING: "/api/user/continue-watching",
    WATCH_PROGRESS: "/api/user/watch-progress",
    WATCHLIST: "/api/user/watchlist",
    ADD_TO_WATCHLIST: "/api/user/watchlist/add",
    REMOVE_FROM_WATCHLIST: "/api/user/watchlist/remove",
  },
  GROUP_WATCH: {
    CREATE: "/api/group-watch/create",
    GET_ROOMS: "/api/group-watch/rooms",
    GET_ROOM: (id: number) => `/api/group-watch/room/${id}`,
    JOIN: "/api/group-watch/join",
    LEAVE: "/api/group-watch/leave",
    SEND_MESSAGE: "/api/group-watch/message",
  },
};
