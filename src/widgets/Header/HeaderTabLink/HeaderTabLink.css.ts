import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const selectedColor = { color: "#0866FF" };
export const defaultColor = { color: colors.secondaryIcon };

export const link = style({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "112px",
    borderRadius: "7px",
    ":active": {
        color: "transparent",
    },
    margin: "0 5px",
    marginTop: "5px",
});

export const linkSelected = style({
    ":hover": {
        backgroundColor: "#F0F2F5",
    },
});

export const linkContainer = style({
    height: "56px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

export const border = style({
    height: "3px",
    width: "90%",
    backgroundColor: selectedColor.color,
});
