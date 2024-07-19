import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const container = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "32px",
    cursor: "pointer",
    borderRadius: "4px",
    ":hover": {
        backgroundColor: "#ebebeb",
    },
});

export const icon = style({
    width: "20px",
    height: "20px",
    backgroundImage: "url(/feed_buttons/panel_icons_5.png)",
    backgroundPosition: "0px -865px",
    filter: "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%);",
});

export const textStyle = style({
    fontFamily: "Segoe UI Semibold",
    fontSize: "0.9375rem",
    fontWeight: 600,
    lineHeight: "1.3333",
    padding: "6px 4px",
    color: colors.secondaryText,
    userSelect: "none",
});
