import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CSSProperties } from "react";

type Props = {
    onClick: (event: object, reason: string) => void;
    style?: CSSProperties;
};

const container = css({});

export default function CrossCloseButton({ onClick, style }: Props) {
    return (
        <div css={container} style={style}>
            <IconButton aria-label="close" size="small" onClick={(e) => onClick(e, "button")}>
                <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>
        </div>
    );
}
