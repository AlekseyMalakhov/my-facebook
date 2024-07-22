import { style, globalStyle } from "@vanilla-extract/css";

export const button = style({
    selectors: {
        "&.MuiButtonBase-root.MuiIconButton-root": {
            backgroundColor: "#E4E6EB",
            padding: 6,
        },
    },
});

export const container = style({
    width: "100%",
});

export const header = style({
    minHeight: "60px",
    display: "flex",
    alignItems: "center",
});

export const title = style({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

globalStyle(`${title} h2`, {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
});

export const divider = style({
    backgroundColor: "#CED0D4",
    height: "1px",
    color: "#dadde1",
    margin: 0,
    padding: 0,
    border: 0,
});
