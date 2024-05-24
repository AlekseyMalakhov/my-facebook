import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    onClick: () => void;
};

const container = css({});

export default function CrossCloseButton({ onClick }: Props) {
    return (
        <div css={container}>
            <IconButton aria-label="close" size="small" onClick={onClick}>
                <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>
        </div>
    );
}
