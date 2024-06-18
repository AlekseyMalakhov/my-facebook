import { css } from "@emotion/react";

type Props = {
    position: string;
    i: number;
    onClick?: () => void;
};

const container = css({
    position: "relative",
    cursor: "pointer",
    transform: "scale(0.8)",
    "&:hover": {
        transform: "scale(1)",
    },
    transition: "transform 0.2s",
});

export default function LikeSmile({ position, i, onClick }: Props) {
    const left = (-i * 6).toString() + "px";
    const iconStyle2 = {
        backgroundPosition: position,
        backgroundImage: `url("/smiles.png")`,
        width: "52px",
        height: "52px",
    };

    const contStyle = {
        left: left,
    };

    return (
        <div css={container} style={contStyle} onClick={onClick}>
            <div style={iconStyle2}></div>
        </div>
    );
}
