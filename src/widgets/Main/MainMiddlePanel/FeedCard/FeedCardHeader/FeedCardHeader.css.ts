import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "12px 16px 0px 16px",
    boxSizing: "border-box",
});

export const userData = style({
    display: "flex",
    alignItems: "center",
});

export const userText = style({
    marginLeft: "8px",
});

export const userName = style({
    fontFamily: "Segoe UI Semibold",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "20px",
    marginBottom: "5px",
});

export const dateDiv = style({
    fontFamily: "Segoe UI",
    color: colors.secondaryText,
    fontSize: "13px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
});

export const headerButtons = style({
    display: "flex",
    alignItems: "center",
});
