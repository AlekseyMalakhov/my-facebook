import { css, SerializedStyles } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CSSProperties } from "react";

type Props = {
    onClick: (event: object, reason: string) => void;
    style?: SerializedStyles;
    iconButtonCSS?: SerializedStyles;
    iconStyle?: CSSProperties;
};

const container = css({});

export default function CrossCloseButton({ onClick, style, iconButtonCSS, iconStyle }: Props) {
    return (
        <div css={[container, style]}>
            <IconButton aria-label="close" onClick={(e) => onClick(e, "button")} css={iconButtonCSS}>
                <CloseIcon sx={iconStyle} />
            </IconButton>
        </div>
    );
}
