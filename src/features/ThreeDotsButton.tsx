import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type Props = {
    onClick: (event: object, reason?: string) => void;
};

const container = css({});

export default function ThreeDotsButton({ onClick }: Props) {
    return (
        <div css={container}>
            <IconButton aria-label="close" size="small" onClick={(e) => onClick(e, "button")}>
                <MoreHorizIcon sx={{ fontSize: 24 }} />
            </IconButton>
        </div>
    );
}
