import AccountIcon from "@/shared/svg/AccountIcon";
import { colors } from "@/shared/cssSettings";
import { container, textContainer, rightContainer, authorName, text, panel, option } from "./Comment.css";

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
        <div className={container}>
            <AccountIcon width={32} />
            <div className={rightContainer}>
                <div className={textContainer}>
                    <div className={authorName}>{item.authorName}</div>
                    <div className={text}>{item.text}</div>
                </div>
                <ul className={panel}>
                    <li className={option} style={{ fontWeight: 400, color: colors.secondaryText }}>
                        4d
                    </li>
                    <li className={option}>Like</li>
                    <li className={option}>Reply</li>
                    <li className={option}>Share</li>
                </ul>
            </div>
        </div>
    );
}
