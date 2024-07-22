import { style } from "@vanilla-extract/css";

export const container = style({});

export const button = style({
    border: "1px solid #ccd0d5",
    borderRadius: "4px",
    flex: 1,
    marginLeft: "13px",
    display: "flex",
});

export const selectors = style({
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
});

export const radioGr = {
    "&.MuiRadioGroup-root": {
        flex: 1,
    },
};

export const formCL = {
    "&.MuiFormControlLabel-root": {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "0px",
        marginRight: "0px",
    },
    "& .MuiFormControlLabel-label": {
        paddingLeft: "9px",
    },
};
