import { globalStyle, style } from "@vanilla-extract/css";

export const emojiPanel = style({
    display: "flex",
    alignItems: "center",
    borderRadius: "23px",
    position: "relative",
    width: "329px",
    border: "1px solid grey",
    backgroundColor: "white",
});

export const popover = style({
    zIndex: 1305,
});

globalStyle(`${popover}.MuiPopover-root .MuiPaper-root`, {
    backgroundColor: "transparent",
    boxShadow: "none",
});
