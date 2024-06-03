import { css } from "@emotion/react";

type Props = {
    width: number;
    height: number;
};

const container = css({
    position: "relative",
    width: "100%",
    height: "100%",
});

const cover = css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    "&:hover": {
        backgroundColor: "rgb(0 0 0 / 5%)",
    },
});

const icon = css({
    borderRadius: "20px",
});

export default function NotificationIcon(props: Props) {
    return (
        <div css={container}>
            <img src="/accont_icon.png" {...props} css={icon} />
            <div css={cover}></div>
        </div>
    );
}
