import { css } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "@/shared/cssSettings";

const container = css({
    flex: 1,
    minWidth: "280px",
    "@media only screen and (max-width: 900px)": {
        display: "none",
    },
});
const title = css({
    paddingTop: "28px",
    color: colors.secondaryText,
    fontSize: "17px",
    fontWeight: 600,
    lineHeight: 1.18,
    paddingLeft: "16px",
});

const container2 = css({
    paddingTop: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",
    cursor: "pointer",
});

const container3 = css({
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    paddingRight: "8px",
    "&:hover": {
        backgroundColor: "#dddddd",
        borderRadius: "6px",
    },
});

const text = css({
    fontFamily: "Segoe UI Semibold",
    color: colors.primaryText,
    fontWeight: 500,
    lineHeight: "1.3333",
    fontSize: "0.9375rem",
});

const iconDiv = css({
    width: "36px",
    height: "36px",
    marginTop: "8px",
    marginBottom: "8px",
    marginRight: "12px",
    backgroundColor: "#E4E6EB",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export default function MainRightPanel() {
    return (
        <div css={container}>
            <h3 css={title}>Group conversations</h3>
            <div css={container2}>
                <div css={container3}>
                    <div css={iconDiv}>
                        <AddIcon />
                    </div>
                    <div css={text}>Create new group</div>
                </div>
            </div>
        </div>
    );
}
