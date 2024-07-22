import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const container = style({
    width: "432px",
});

export const name = style({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
});

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 16px",
});

export const separator = style({
    borderBottom: "1px solid #dadde1",
});

export const form = style({
    padding: "16px",
});

export const birthday = style({
    marginTop: "10px",
});

export const title = style({
    fontSize: "12px",
    color: "#606770",
    display: "flex",
    alignItems: "center",
});

export const selectors = style({
    display: "flex",
    justifyContent: "space-between",
});

export const helpText = style({
    width: "340px",
    padding: "12px",
    color: colors.secondaryText,
    fontSize: "13px",
});

export const link = style({
    color: "#0866ff",
    fontSize: "13px",
    textDecoration: "none",
    ":hover": {
        textDecoration: "underline",
    },
});

export const link2 = style({
    color: "#385898",
    fontSize: "11px",
    textDecoration: "none",
    ":hover": {
        textDecoration: "underline",
    },
});

export const notification = style({
    fontSize: "11px",
    marginTop: "20px",
    color: "#777",
});

export const signUpButton = style({
    selectors: {
        "&.MuiButtonBase-root.MuiButton-root": {
            background: "linear-gradient(#00a400, #00a400)",
            height: "36px",
            fontSize: "18px",
            padding: "0 32px",
            textTransform: "none",
            fontWeight: "bold",
            width: "194px",
            marginTop: "10px",
            marginBottom: "10px",
        },
        "&.MuiButtonBase-root.MuiButton-root:hover": {
            background: "linear-gradient(#79bc64, #578843)",
        },
    },
});

export const signUpButtonContainer = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
});
