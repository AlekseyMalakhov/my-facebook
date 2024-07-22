import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
    display: "flex",
    alignItems: "center",
});

export const button = style({
    selectors: {
        "&.MuiButtonBase-root": {
            width: "104px",
            fontFamily: "Segoe UI Semibold",
            backgroundColor: "#EBF5FF",
            fontSize: ".9375rem",
            fontWeight: 600,
            lineHeight: "1.3333",
            textTransform: "none",
            height: "36px",
            borderRadius: "18px",
            padding: 0,
        },
        "&.MuiButtonBase-root:hover": {
            backgroundColor: "#d2e1ef",
        },
    },
});

export const menu = style({
    backgroundColor: "#E4E6EB",
    width: "40px",
    height: "40px",
    marginRight: "8px",
});

export const accountStyle = style({
    borderRadius: "20px",
    cursor: "pointer",
});

export const friendsContainer = style({
    marginRight: "8px",
    "@media": {
        "only screen and (max-width: 1260px)": {
            display: "none",
        },
    },
});

export const friendsTab = style({});

globalStyle(`${friendsTab}.MuiButtonBase-root`, {
    color: "#0064D1",
    backgroundColor: "EBF5FF",
});

export const justTab = style({});

globalStyle(`${justTab}.MuiButtonBase-root`, {
    color: "#1c1e21",
    backgroundColor: "#E4E6EB",
});
