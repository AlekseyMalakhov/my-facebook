import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const container = css({});

const button = css({
    width: "104px",
    fontFamily: "Segoe UI Semibold",
    backgroundColor: "#EBF5FF",
    color: "#0064D1",
    fontSize: ".9375rem",
    fontWeight: 600,
    lineHeight: "1.3333",
    textTransform: "none",
    height: "36px",
    borderRadius: "18px",
    "&:hover": {
        backgroundColor: "#d2e1ef",
    },
    padding: 0,
});

export default function HeaderFeaturesSelector() {
    return (
        <div css={container}>
            <Link to="friends">
                <Button variant="contained" css={button} disableElevation>
                    Find friends
                </Button>
            </Link>
        </div>
    );
}
