import { Link } from "react-router-dom";
import PublicGroupIcon from "@/shared/svg/PublicGroupIcon";
import ThreeDotsButton from "@/features/ThreeDotsButton";
import CrossCloseButton from "@/features/CrossCloseButton";
import { FeedItem } from "../FeedCard";
import { getMonthDayAtTime } from "@/shared/utils";
import AccountIcon from "@/shared/svg/AccountIcon/AccountIcon";
import { header, userData, userText, userName, dateDiv, headerButtons } from "./FeedCardHeader.css";

type Props = {
    item: FeedItem;
    asDialog?: boolean;
};

export default function FeedCardHeader({ item, asDialog }: Props) {
    const date = getMonthDayAtTime(Number(item.date));

    return (
        <div className={header}>
            <div className={userData}>
                <div style={{ width: "40px" }}>
                    <AccountIcon width={40} />
                </div>
                <div className={userText}>
                    <div className={userName}>
                        {item.author}
                        <span>&nbsp;·&nbsp;</span>
                        <Link to={""}>
                            <span style={{ color: "#0064D1" }}>Follow</span>
                        </Link>
                    </div>
                    <div className={dateDiv}>
                        {date}
                        <span>&nbsp;·&nbsp;</span>
                        <PublicGroupIcon width={12} height={12} viewBox="0 0 16 16" />
                    </div>
                </div>
            </div>
            <div className={headerButtons}>
                <ThreeDotsButton onClick={() => null} />
                {asDialog ? null : <CrossCloseButton onClick={() => null} style={{ marginLeft: "5px" }} />}
            </div>
        </div>
    );
}
