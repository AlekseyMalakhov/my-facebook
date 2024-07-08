import { css } from "@emotion/react";
import { CSSProperties } from "react";

export type AccountIconProps = {
    width: number;
    style?: CSSProperties;
};

const container = css({
    position: "relative",
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

export default function AccountIcon(props: AccountIconProps) {
    const props2 = {
        ...props,
        height: props.width,
    };
    return (
        <div css={container}>
            <img src="/accont_icon.png" {...props2} css={icon} />
            <div css={cover}></div>
        </div>
    );
}
