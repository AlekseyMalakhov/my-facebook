import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CSSProperties } from "react";

type Props = {
    onClick: (event: object, reason: string) => void;
    style?: CSSProperties;
    iconButtonCSS?: string;
    iconStyle?: CSSProperties;
};

export default function CrossCloseButton({ onClick, style, iconButtonCSS, iconStyle }: Props) {
    return (
        <div style={style}>
            <IconButton aria-label="close" onClick={(e) => onClick(e, "button")} className={iconButtonCSS}>
                <CloseIcon sx={iconStyle} />
            </IconButton>
        </div>
    );
}
