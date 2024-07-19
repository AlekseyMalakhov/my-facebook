import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const container = style({
    display: "flex",
    marginTop: "9px",
});

export const textContainer = style({
    backgroundColor: "#F0F2F5",
    color: colors.primaryText,
    borderRadius: "18px",
    padding: "8px 12px",
    marginLeft: "6px",
});

export const rightContainer = style({});

export const authorName = style({
    color: colors.primaryText,
    fontWeight: 600,
    lineHeight: 1.2308,
    fontSize: ".8125rem",
});

export const text = style({
    paddingTop: "4px",
    paddingBottom: "4px",
    fontWeight: 400,
    lineHeight: 1.3333,
    fontSize: "0.9375rem",
});

export const panel = style({
    display: "flex",
    alignItems: "center",
    paddingTop: "3px",
    marginLeft: "4px",
    lineHeight: "12px",
    listStyleType: "none",
});

export const option = style({
    marginLeft: "8px",
    marginRight: "8px",
    color: "#1c1e21",
    fontWeight: 700,
    fontSize: "12px",
    cursor: "pointer",
    ":hover": {
        textDecoration: "underline",
    },
});
