import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";

const container = css({
    display: "inline-flex",
    alignItems: "center",
});

export default function ShowTooltipButton() {
    return (
        <div css={container}>
            <IconButton aria-label="help" size="small">
                <HelpIcon sx={{ fontSize: 15 }} />
            </IconButton>
        </div>
    );
}
