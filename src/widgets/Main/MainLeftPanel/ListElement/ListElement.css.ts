import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const container = style({
    paddingLeft: "8px",
    paddingRight: "8px",
    maxWidth: "360px",
});

export const container2 = style({
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    paddingRight: "8px",
    ":hover": {
        backgroundColor: "#dddddd",
        borderRadius: "6px",
    },
});

export const text = style({
    fontFamily: "Segoe UI Semibold",
    color: colors.primaryText,
    fontWeight: 500,
    lineHeight: "1.3333",
    fontSize: "0.9375rem",
});

export const iconDiv = style({
    width: "36px",
    height: "36px",
    marginTop: "8px",
    marginBottom: "8px",
    marginRight: "12px",
});
