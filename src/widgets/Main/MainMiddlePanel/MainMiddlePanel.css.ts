import { style } from "@vanilla-extract/css";

export const container = style({
    maxWidth: "680px",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    "@media": {
        "only screen and (min-width: 900px)": {
            minWidth: "550px",
            paddingLeft: "32px",
            paddingRight: "32px",
        },
    },
});
