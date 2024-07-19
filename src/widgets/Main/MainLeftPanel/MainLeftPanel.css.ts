import { style } from "@vanilla-extract/css";

export const container = style({
    flex: 1,
    marginTop: "16px",
    marginBottom: "30px",
    "@media": {
        "only screen and (max-width: 1100px)": {
            display: "none",
        },
    },
});
