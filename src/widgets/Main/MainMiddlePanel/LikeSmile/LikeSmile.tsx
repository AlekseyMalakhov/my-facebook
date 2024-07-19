import { container } from "./LikeSmile.css";

type Props = {
    position: string;
    i: number;
    onClick?: () => void;
};

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
        <div className={container} style={contStyle} onClick={onClick}>
            <div style={iconStyle2}></div>
        </div>
    );
}
