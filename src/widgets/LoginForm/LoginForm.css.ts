import { style } from "@vanilla-extract/css";

export const paper = style({
    width: "396px",
    selectors: {
        "&.MuiPaper-rounded": {
            borderRadius: "5px",
        },
    },
});

export const container = style({
    padding: "15px",
    textAlign: "center",
});

export const loginButton = style({
    selectors: {
        "&.MuiButtonBase-root.MuiButton-root": {
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#0866ff",
            fontSize: "20px",
            textTransform: "none",
            fontWeight: 700,
            marginTop: "5px",
        },
    },
});

export const link = style({
    color: "#0866ff",
    fontSize: "14px",
    textDecoration: "none",
    ":hover": {
        textDecoration: "underline",
    },
});

export const link2 = style({
    color: "black",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": {
        textDecoration: "underline",
    },
});

export const separator = style({
    borderBottom: "1px solid #dadde1",
    margin: "20px 0px",
});

export const createButton = style({
    selectors: {
        "&.MuiButtonBase-root.MuiButton-root": {
            height: "48px",
            borderRadius: "6px",
            backgroundColor: "#42b72a",
            fontSize: "17px",
            textTransform: "none",
            fontWeight: 700,
            marginTop: "5px",
            marginBottom: "10px",
        },
    },
});
