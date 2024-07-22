import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/cssSettings";

export const container = style({
    marginLeft: "9px",
    height: "40px",
    width: "280px",
    "@media": {
        "only screen and (max-width: 1259px)": {
            display: "none",
        },
    },
});

export const inputStyle = {
    "& .MuiInputBase-root": {
        height: "40px",
        borderRadius: "50px",
        backgroundColor: "#F0F2F5",
        fontSize: ".9375rem",
        border: "none",
        paddingLeft: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "& .MuiInputAdornment-root": {
        marginRight: "3px",
    },
    "& .MuiInputBase-input::placeholder": {
        fontFamily: "Segoe UI",
        color: colors.secondaryText,
        fontSize: "15px",
        opacity: "1",
        letterSpacing: "0px",
    },
};

export const container2 = style({
    marginLeft: "9px",
    height: "40px",
    "@media": {
        "only screen and (min-width: 1260px)": {
            display: "none",
        },
    },
});

export const search = style({
    backgroundColor: colors.commentBackground,
    width: "40px",
    height: "40px",
    marginRight: "8px",
});
