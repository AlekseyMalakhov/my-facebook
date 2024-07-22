import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { Fragment } from "react";
import { container, container2, search, inputStyle } from "./Search.css";

export default function Search() {
    return (
        <Fragment>
            <div className={container}>
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
                    sx={inputStyle}
                />
            </div>
            <div className={container2}>
                <IconButton aria-label="menu" className={search}>
                    <SearchIcon sx={{ fontSize: "22px" }} />
                </IconButton>
            </div>
        </Fragment>
    );
}
