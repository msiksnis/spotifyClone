export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  // remove after finished developing
  token:
    "BQCEqXhglXcNXZNnb6j0nLIkx52J-rOywqYDQBEhGlal9YoespF5zE8phQzbmT_wGcdBkFQr6lYRzzpRpYdGI3IQqUKSC0OxuOVHzFoanFhNjQIN-Z9VJ19O56LgTcSSXHbIPkYw2iSsIClA-ck7yPrK9xq_K2mciJrgCpsKBVsNm90P",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
