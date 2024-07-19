import { css } from "@emotion/react";
import CrossCloseButton from "@/features/CrossCloseButton";
import { colors } from "@/shared/cssSettings";
import { button } from "./FeedCardCommentHeader.css";

const container = css({
    width: "100%",
});

const header = css({
    minHeight: "60px",
    display: "flex",
    alignItems: "center",
});

const title = css({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h2": {
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "24px",
    },
});

const divider = css({
    backgroundColor: "#CED0D4",
    height: "1px",
    color: "#dadde1",
    margin: 0,
    padding: 0,
    border: 0,
});

type Props = {
    name: string;
    onClick: () => void;
};

export default function FeedCardCommentHeader({ name, onClick }: Props) {
    return (
        <div css={container}>
            <div css={header}>
                <div css={title}>
                    <h2>{name}'s Post</h2>
                </div>
                <CrossCloseButton
                    onClick={onClick}
                    iconButtonCSS={button}
                    style={{ marginRight: "18px" }}
                    iconStyle={{ color: colors.primaryIcon }}
                />
            </div>
            <hr css={divider}></hr>
        </div>
    );
}
