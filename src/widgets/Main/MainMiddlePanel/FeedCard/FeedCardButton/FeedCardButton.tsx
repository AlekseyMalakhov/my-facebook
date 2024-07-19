import { container, icon, textStyle } from "./FeedCardButton.css";

type Props = {
    type: "share" | "comment" | "like";
};

export default function FeedCardButton({ type }: Props) {
    let pos = "0px -865px";
    let text = "Share";
    if (type === "comment") {
        pos = "0px -529px";
        text = "Comment";
    }
    if (type === "like") {
        pos = "0px -718px";
        text = "Like";
    }

    return (
        <div className={container} aria-label="Send this to friends or post it on your profile." role="button">
            <div className={icon} style={{ backgroundPosition: pos }}></div>
            <div className={textStyle}>{text}</div>
        </div>
    );
}
