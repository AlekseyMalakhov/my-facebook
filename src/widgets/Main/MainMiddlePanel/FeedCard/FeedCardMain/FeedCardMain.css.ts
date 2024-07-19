import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const image = style({
    marginTop: "16px",
});

export const footer = style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 8px",
    boxSizing: "border-box",
});

export const footerLikes = style({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 8px",
});

export const likes = style({
    fontFamily: "Segoe UI",
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
    lineHeight: "1.3333",
});

export const commentsNumber = style({
    fontFamily: "Segoe UI",
    display: "flex",
    alignItems: "center",
    color: colors.secondaryText,
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: 400,
});

export const bottomContainer = style({
    width: "100%",
    padding: "0 8px",
    boxSizing: "border-box",
});

export const bottomButtons = style({
    width: "100%",
    padding: "0 8px",
    paddingTop: "6px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #CED0D4",
});

export const description = style({
    padding: "4px 16px 0px 16px",
    fontFamily: "Segoe UI Historic",
    fontSize: ".9375rem",
    lineHeight: "1.3333",
    fontWeight: 400,
    color: colors.primaryText,
});

export const container = style({});
