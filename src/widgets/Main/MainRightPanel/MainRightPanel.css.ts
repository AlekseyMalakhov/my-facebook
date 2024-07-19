import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const container = style({
    flex: 1,
    minWidth: "280px",
    "@media": {
        "only screen and (max-width: 900px)": {
            display: "none",
        },
    },
});

export const title = style({
    paddingTop: "28px",
    color: colors.secondaryText,
    fontSize: "17px",
    fontWeight: 600,
    lineHeight: 1.18,
    paddingLeft: "16px",
});

export const container2 = style({
    paddingTop: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",
    cursor: "pointer",
});

export const container3 = style({
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
    backgroundColor: "#E4E6EB",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
