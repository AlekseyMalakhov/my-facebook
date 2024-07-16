import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "@/shared/cssSettings";
import { IconButton } from "@mui/material";
import { Fragment } from "react";

const container = css({
    marginLeft: "9px",
    height: "40px",
    width: "280px",
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
    "@media only screen and (max-width: 1259px)": {
        display: "none",
    },
});

const container2 = css({
    marginLeft: "9px",
    height: "40px",
    "@media only screen and (min-width: 1260px)": {
        display: "none",
    },
});

const search = css({
    backgroundColor: colors.commentBackground,
    width: "40px",
    height: "40px",
    marginRight: "8px",
});

export default function Search() {
    return (
        <Fragment>
            <div css={container}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ fontSize: "22px" }} />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    placeholder="Search Facebook"
                    fullWidth
                />
            </div>
            <div css={container2}>
                <IconButton aria-label="menu" css={search}>
                    <SearchIcon sx={{ fontSize: "22px" }} />
                </IconButton>
            </div>
        </Fragment>
    );
}
