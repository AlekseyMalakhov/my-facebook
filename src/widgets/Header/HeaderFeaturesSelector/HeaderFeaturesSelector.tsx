import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../../../shared/svg/MenuIcon";
import MessengerIcon from "../../../shared/svg/MessengerIcon";
import AccountIcon from "../../../shared/svg/AccountIcon/AccountIcon";
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
            <IconButton aria-label="menu" sx={menu}>
                <MenuIcon sx={{ color: "#1c1e21", width: 20, height: 20 }} />
            </IconButton>
            <IconButton aria-label="messenger" sx={menu}>
                <MessengerIcon sx={{ color: "#1c1e21", width: 22, height: 22 }} />
            </IconButton>
            <div aria-label="account" className={accountStyle}>
                <AccountIcon width={40} />
            </div>
        </div>
    );
}
