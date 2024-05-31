import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../shared/svg/MenuIcon";
import MessengerIcon from "../shared/svg/MessengerIcon";
import NotificationIcon from "../shared/svg/NotificationIcon";

const container = css({
    display: "flex",
    alignItems: "center",
});

const button = css({
    width: "104px",
    fontFamily: "Segoe UI Semibold",
    backgroundColor: "#EBF5FF",
    color: "#0064D1",
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

export default function HeaderFeaturesSelector() {
    return (
        <div css={container}>
            <Link to="friends" style={{ marginRight: "8px" }}>
                <Button variant="contained" css={button} disableElevation>
                    Find friends
                </Button>
            </Link>
            <IconButton aria-label="menu" css={menu}>
                <MenuIcon width={20} height={20} sx={{ color: "#1c1e21" }} />
            </IconButton>
            <IconButton aria-label="messenger" css={menu}>
                <MessengerIcon width={22} height={22} sx={{ color: "#1c1e21" }} />
            </IconButton>
            <IconButton aria-label="notification" css={menu}>
                <NotificationIcon width={20} height={20} sx={{ color: "#1c1e21" }} />
            </IconButton>
        </div>
    );
}
