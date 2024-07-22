import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../../../shared/svg/MenuIcon";
import MessengerIcon from "../../../shared/svg/MessengerIcon";
import AccountIcon from "../../../shared/svg/AccountIcon";
import { container, button, menu, accountStyle, friendsContainer, friendsTab, justTab } from "./HeaderFeaturesSelector.css";

export default function HeaderFeaturesSelector() {
    const { tab } = useParams();

    return (
        <div className={container}>
            <Link to="friends" className={friendsContainer}>
                <Button variant="contained" className={[button, tab === "friends" ? friendsTab : justTab].join(" ")} disableElevation>
                    Find friends
                </Button>
            </Link>
            <IconButton aria-label="menu" className={menu}>
                <MenuIcon width={20} height={20} sx={{ color: "#1c1e21" }} />
            </IconButton>
            <IconButton aria-label="messenger" className={menu}>
                <MessengerIcon width={22} height={22} sx={{ color: "#1c1e21" }} />
            </IconButton>
            <div aria-label="account" className={[menu, accountStyle].join(" ")}>
                <AccountIcon width={40} />
            </div>
        </div>
    );
}
