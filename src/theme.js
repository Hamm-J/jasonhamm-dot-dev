const generalTheme = {
  fontTitle: "Helvetica",
  fontBody: "Trebuchet MS",
  colorBlack: "black",
  colorWhite: "white",
  colorAccent: "#952121",
};

export const lightTheme = {
  colorPrimary: "black",
  colorSecondary: "white",
  backgroundColor: "white",

  ...generalTheme,
};

export const darkTheme = {
  colorPrimary: "white",
  colorSecondary: "black",
  backgroundColor: "#181a1b",

  ...generalTheme,
};
