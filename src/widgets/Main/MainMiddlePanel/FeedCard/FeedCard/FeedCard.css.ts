import { style } from "@vanilla-extract/css";

export const container = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "0 0 12px 0",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "16px",
});
