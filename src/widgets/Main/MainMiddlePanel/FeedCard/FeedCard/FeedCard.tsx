import { useState } from "react";
import { Dialog } from "@mui/material";
import FeedCardCommentHeader from "../FeedCardCommentHeader/FeedCardCommentHeader";
import { CustomScroll } from "react-custom-scroll";
import FeedCardMain from "../FeedCardMain/FeedCardMain";
import { container } from "./FeedCard.css";

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

interface BaseProps {
    key?: number;
    item: FeedItem;
}

interface PropsAsNormal extends BaseProps {
    asDialog?: undefined;
    closeDialogFromParent?: undefined;
}

interface PropsAsDialog extends BaseProps {
    asDialog: boolean;
    closeDialogFromParent: () => void;
}

type Props = PropsAsDialog | PropsAsNormal;

export default function FeedCard(props: Props) {
    const item = props.item;

    let asDialog = false;
    let closeDialogFromParent = () => {};

    if (props.asDialog) {
        asDialog = props.asDialog;
        closeDialogFromParent = props.closeDialogFromParent;
    }

    const [showDialog, setShowDialog] = useState(false);

    const showComments = () => {
        if (!showDialog && !asDialog) {
            setShowDialog(true);
        }
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className={container}>
            {asDialog ? <FeedCardCommentHeader name={item.author} onClick={closeDialogFromParent} /> : null}
            {asDialog ? (
                <CustomScroll heightRelativeToParent="100%">
                    <FeedCardMain item={item} asDialog={asDialog} showComments={showComments} />
                </CustomScroll>
            ) : (
                <FeedCardMain item={item} asDialog={asDialog} showComments={showComments} />
            )}

            <Dialog onClose={closeDialog} open={showDialog}>
                <FeedCard item={item} asDialog closeDialogFromParent={closeDialog} />
            </Dialog>
        </div>
    );
}
