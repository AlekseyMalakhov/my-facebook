import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    onClick: (event: object, reason: string) => void;
};

const container = css({});

export default function CrossCloseButton({ onClick }: Props) {
    return (
        <div css={container}>
            <IconButton aria-label="close" size="small" onClick={(e) => onClick(e, "button")}>
                <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>
        </div>
    );
}
