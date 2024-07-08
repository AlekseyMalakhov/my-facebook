import AccountIcon from "@/shared/svg/AccountIcon";
import { css } from "@emotion/react";

const container = css({
    display: "flex",
    marginTop: "9px",
});
const textContainer = css({
    backgroundColor: "#F0F2F5",
    color: "#050505",
    borderRadius: "18px",
    padding: "8px 12px",
    marginLeft: "6px",
});

type Comment = {
    id: number;
    authorName: string;
    text: string;
};

type Props = {
    item: Comment;
};

export default function Comment({ item }: Props) {
    return (
        <div css={container}>
            <AccountIcon width={32} />
            <div css={textContainer}>
                <div>{item.authorName}</div>
                <div>{item.text}</div>
            </div>
        </div>
    );
}
