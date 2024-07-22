import { style } from "@vanilla-extract/css";

export const container = style({
    display: "flex",
    flexDirection: "column",
    height: "100%",
});

export const main = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    minHeight: "720px",
});

export const container2 = style({
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    maxWidth: "980px",
});

export const hello = style({
    marginTop: "40px",
});

export const helloText = style({
    width: "500px",
    fontSize: "28px",
    lineHeight: "32px",
    fontWeight: "normal",
    paddingBottom: "20px",
    color: "#1c1e21",
});

export const footer = style({
    display: "flex",
    justifyContent: "center",
    margin: "0 40px",
});

export const footerContent = style({
    display: "flex",
    flexDirection: "column",
    color: "#8a8d91",
    fontSize: "12px",
    maxWidth: "980px",
});

export const langsList = style({
    marginBlock: "0px",
    marginInline: "0px",
    paddingInline: "0px",
    listStyleType: "none",
    paddingTop: "20px",
});

export const listItem = style({
    paddingRight: "10px",
    display: "inline-block",
    lineHeight: 1.6,
});

export const line = style({
    borderBottom: "1px solid #dddfe2",
    paddingTop: "8px",
    marginBottom: "8px",
});

export const copyRight = style({
    margin: "20px 0px",
    fontSize: "11px",
    color: "#737373",
});
