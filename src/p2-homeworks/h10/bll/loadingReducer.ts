type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof loadingAC>;

export const loadingAC = (isLoading: boolean) =>
  ({
    type: "SET-IS-LOADING",
    isLoading,
  } as const);

const initState = {
  isLoading: false,
};

export const loadingReducer = (
  state = initState,
  action: ActionsType
): InitStateType => {
  switch (action.type) {
    case "SET-IS-LOADING": {
      return { ...state, isLoading: action.isLoading };
    }

    default:
      return state;
  }
};
