import FeedCardButton from "../FeedCardButton/FeedCardButton";
import CommentPanel from "../../CommentPanel/CommentPanel";
import FeedCardHeader from "../FeedCardHeader/FeedCardHeader";
import FeedCardLikesPanel from "../FeedCardLikesPanel/FeedCardLikesPanel";
import { Fragment, useRef, useState } from "react";
import { colors } from "@/shared/cssSettings";
import { container, description, image, footer, footerLikes, likes, commentsNumber, bottomButtons, bottomContainer } from "./FeedCardMain.css";

type LikesObj = {
    like: number;
    love: number;
};

type Comment = {
    id: number;
    author: string;
    text: string;
    date: string;
};

export type FeedItem = {
    id: number;
    author: string;
    date: string;
    text: string;
    img: string;
    likes: LikesObj;
    likesNumber: number;
    shares: number;
    comments: Comment[];
};

type Props = {
    item: FeedItem;
    asDialog?: boolean;
    showComments: () => void;
};

export default function FeedCardMain({ item, asDialog, showComments }: Props) {
    const [showLikesPanel, setShowLikesPanel] = useState(false);
    const likesButtonEl = useRef<HTMLDivElement | null>(null);

    return (
        <Fragment>
            <div className={container} style={asDialog ? { height: "calc(100vh - 153px)" } : {}}>
                <FeedCardHeader item={item} asDialog={asDialog} />
                <div className={description}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={image}>
                    <img src={item.img} style={{ width: "100%", height: "auto" }} width={1024} height={683} />
                </div>
                <div className={footer}>
                    <div className={footerLikes}>
                        <div className={likes}>
                            <img src="/like.svg" width={18} height={18}></img>
                            <img src="/heart.svg" width={18} height={18}></img>
                            <div style={{ paddingLeft: "5px", color: colors.secondaryText }}>{item.likesNumber}</div>
                        </div>
                        <div className={commentsNumber}>
                            <div style={{ padding: "0 8px", cursor: "pointer" }} onClick={showComments}>
                                {item.comments.length} comments
                            </div>
                            <div style={{ padding: "0 8px" }}>{item.comments.length} shares</div>
                        </div>
                    </div>
                    <div className={bottomContainer}>
                        <div className={bottomButtons}>
                            <div
                                ref={likesButtonEl}
                                onMouseEnter={() => setShowLikesPanel(true)}
                                onMouseLeave={() => setShowLikesPanel(false)}
                                style={{ flex: 1 }}
                            >
                                <FeedCardButton type="like" />
                            </div>
                            <FeedCardButton type="comment" />
                            <FeedCardButton type="share" />
                        </div>
                    </div>
                    {asDialog ? <CommentPanel /> : null}
                </div>
            </div>
            <FeedCardLikesPanel showLikesPanel={showLikesPanel} likesButtonEl={likesButtonEl} setShowLikesPanel={setShowLikesPanel} />
        </Fragment>
    );
}
