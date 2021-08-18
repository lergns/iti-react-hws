export type ThemesType = "dark" | "red" | "some";
type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof changeThemeAC>;

export const changeThemeAC = (theme: ThemesType) =>
  ({
    type: "CHANGE-THEME",
    theme,
  } as const);

const initState = {
  theme: "some" as ThemesType,
};

export const themeReducer = (
  state = initState,
  action: ActionsType
): InitStateType => {
  // fix any
  switch (action.type) {
    case "CHANGE-THEME":
      return { ...state, theme: action.theme };

    default:
      return state;
  }
};
