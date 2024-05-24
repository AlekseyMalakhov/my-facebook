import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";

type Props = {
    onClick: () => void;
};

const container = css({
    display: "inline-flex",
    alignItems: "center",
});

export default function ShowTooltipButton({ onClick }: Props) {
    return (
        <div css={container}>
            <IconButton aria-label="help" size="small" onClick={onClick}>
                <HelpIcon sx={{ fontSize: 15 }} />
            </IconButton>
        </div>
    );
}
