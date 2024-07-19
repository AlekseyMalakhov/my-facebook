import { style, globalStyle } from "@vanilla-extract/css";

export const button = style({});

globalStyle(`${button}.MuiButtonBase-root.MuiIconButton-root`, {
    backgroundColor: "#E4E6EB",
    padding: 6,
});
