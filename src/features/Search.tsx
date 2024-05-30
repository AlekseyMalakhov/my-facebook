import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

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
        color: "#65676B",
        fontSize: "15px",
        opacity: "1",
        letterSpacing: "0px",
    },
});

export default function Search() {
    return (
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
    );
}
