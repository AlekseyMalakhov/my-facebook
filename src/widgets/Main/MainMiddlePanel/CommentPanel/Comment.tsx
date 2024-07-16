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

const rightContainer = css({});

const authorName = css({
    color: "#050505",
    fontWeight: 600,
    lineHeight: 1.2308,
    fontSize: ".8125rem",
});

const text = css({
    paddingTop: "4px",
    paddingBottom: "4px",
    fontWeight: 400,
    lineHeight: 1.3333,
    fontSize: "0.9375rem",
});

const panel = css({
    display: "flex",
    alignItems: "center",
    paddingTop: "3px",
    marginLeft: "4px",
    lineHeight: "12px",
    listStyleType: "none",
});

const option = css({
    marginLeft: "8px",
    marginRight: "8px",
    //color: "#65676B",
    color: "#1c1e21",
    fontWeight: 700,
    fontSize: "12px",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
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
            <div css={rightContainer}>
                <div css={textContainer}>
                    <div css={authorName}>{item.authorName}</div>
                    <div css={text}>{item.text}</div>
                </div>
                <ul css={panel}>
                    <li css={option} style={{ fontWeight: 400, color: "#65676B" }}>
                        4d
                    </li>
                    <li css={option}>Like</li>
                    <li css={option}>Reply</li>
                    <li css={option}>Share</li>
                </ul>
            </div>
        </div>
    );
}
