import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const container = css({
    marginLeft: "9px",
    height: "40px",
    "& .MuiInputBase-root": {
        height: "40px",
        borderRadius: "50px",
        backgroundColor: "#F0F2F5",
        fontSize: ".9375rem",
        border: "none",
        paddingLeft: "10px",
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    },
});

export default function Search() {
    return (
        <div css={container}>
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                placeholder="Search Facebook"
            />
        </div>
    );
}
