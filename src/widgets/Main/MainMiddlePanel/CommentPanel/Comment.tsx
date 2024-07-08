import AccountIcon from "@/shared/svg/AccountIcon";
import { css } from "@emotion/react";

const container = css({});

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
            <div>{item.authorName}</div>
            <div>{item.text}</div>
        </div>
    );
}
