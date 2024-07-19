import { style } from "@vanilla-extract/css";

export const container = style({
    position: "relative",
    cursor: "pointer",
    transform: "scale(0.8)",
    ":hover": {
        transform: "scale(1)",
    },
    transition: "transform 0.2s",
});
