import { css } from "@emotion/react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../shared/svg/MenuIcon";
import MessengerIcon from "../shared/svg/MessengerIcon";
import AccountIcon from "../shared/svg/AccountIcon";

const container = css({
    display: "flex",
    alignItems: "center",
});

const button = css({
    width: "104px",
    fontFamily: "Segoe UI Semibold",
    backgroundColor: "#EBF5FF",
    //color: "#0064D1",
    fontSize: ".9375rem",
    fontWeight: 600,
    lineHeight: "1.3333",
    textTransform: "none",
    height: "36px",
    borderRadius: "18px",
    "&:hover": {
        backgroundColor: "#d2e1ef",
    },
    padding: 0,
});

const menu = css({
    backgroundColor: "#E4E6EB",
    width: "40px",
    height: "40px",
    marginRight: "8px",
});

const accountStyle = css({
    borderRadius: "20px",
    cursor: "pointer",
});

const friendsTab = css({
    color: "#0064D1",
    backgroundColor: "EBF5FF",
});

const justTab = css({
    color: "#1c1e21",
    backgroundColor: "#E4E6EB",
});
export default function HeaderFeaturesSelector() {
    const { tab } = useParams();

    return (
        <div css={container}>
            <Link to="friends" style={{ marginRight: "8px" }}>
                <Button variant="contained" css={[button, tab === "friends" ? friendsTab : justTab]} disableElevation>
                    Find friends
                </Button>
            </Link>
            <IconButton aria-label="menu" css={menu}>
                <MenuIcon width={20} height={20} sx={{ color: "#1c1e21" }} />
            </IconButton>
            <IconButton aria-label="messenger" css={menu}>
                <MessengerIcon width={22} height={22} sx={{ color: "#1c1e21" }} />
            </IconButton>
            <div aria-label="account" css={[menu, accountStyle]}>
                <AccountIcon width={40} />
            </div>
        </div>
    );
}
