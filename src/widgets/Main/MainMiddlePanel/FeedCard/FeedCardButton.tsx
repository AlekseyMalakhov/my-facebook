import { css } from "@emotion/react";

type Props = {
    type: "share" | "comment" | "like";
};

const container = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //maxWidth: "210px",
    flex: 1,
    height: "32px",
    cursor: "pointer",
    borderRadius: "4px",
    "&:hover": {
        backgroundColor: "#ebebeb",
    },
});

const icon = css({
    width: "20px",
    height: "20px",
    backgroundImage: "url(/feed_buttons/panel_icons_5.png)",
    backgroundPosition: "0px -865px",
    filter: "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%);",
});

const textStyle = css({
    fontFamily: "Segoe UI Semibold",
    fontSize: "0.9375rem",
    fontWeight: 600,
    lineHeight: "1.3333",
    padding: "6px 4px",
    color: "#65676B",
    userSelect: "none",
});

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
        <div css={container} aria-label="Send this to friends or post it on your profile." role="button">
            <div css={icon} style={{ backgroundPosition: pos }}></div>
            <div css={textStyle}>{text}</div>
        </div>
    );
}
