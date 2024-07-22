import ListElement, { ListElementType } from "./ListElement/ListElement";
import AccountIcon from "../../../shared/svg/AccountIcon/AccountIcon";
import { useState } from "react";
import SeeMoreIcon from "../../../shared/svg/SeeMoreIcon/SeeMoreIcon";
import { fullList } from "./list";
import { container } from "./MainLeftPanel.css";

export default function MainLeftPanel() {
    const [seeMore, setSeeMore] = useState(false);

    const account: ListElementType = {
        id: Date.now(),
        value: "account",
        title: "Account",
        icon: {
            type: "icon",
            value: AccountIcon,
        },
    };

    const seeMoreButton: ListElementType = {
        id: Date.now(),
        value: "",
        title: "See more",
        icon: {
            type: "svg",
            value: SeeMoreIcon,
        },
        svgProps: {
            viewBox: "0 0 16 16",
        },
    };

    const shortList = fullList.filter((_item, i) => {
        if (i < 10) {
            return true;
        }
    });

    const toggleSeeMore = () => {
        if (seeMore) {
            setSeeMore(false);
        } else {
            setSeeMore(true);
        }
    };

    return (
        <ul className={container}>
            <ListElement item={account} />
            {seeMore
                ? fullList.map((item) => <ListElement item={item} key={item.id} />)
                : shortList.map((item) => <ListElement item={item} key={item.id} />)}
            <div onClick={toggleSeeMore}>
                <ListElement item={seeMoreButton} />
            </div>
        </ul>
    );
}
