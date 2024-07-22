import { style } from "@vanilla-extract/css";

export const container = style({
    position: "relative",
});

export const cover = style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    ":hover": {
        backgroundColor: "rgb(0 0 0 / 5%)",
    },
});

export const icon = style({
    borderRadius: "20px",
});
