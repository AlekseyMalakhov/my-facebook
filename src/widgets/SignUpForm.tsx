import { css } from "@emotion/react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import LoginSelector from "../features/LoginSelector";
import { SelectChangeEvent } from "@mui/material/Select";
import ShowTooltipButton from "../features/ShowTooltipButton";
import Popover from "@mui/material/Popover";
import Link from "@mui/material/Link";
import CrossCloseButton from "../features/CrossCloseButton";

type Props = {
    handleClose: () => void;
    open: boolean;
};

const container = css({
    width: "432px",
});

const name = css({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
});

const header = css({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 16px",
});

const separator = css({
    borderBottom: "1px solid #dadde1",
});

const form = css({
    padding: "16px",
});

const birthday = css({
    marginTop: "10px",
});

const title = css({
    fontSize: "12px",
    color: "#606770",
    display: "flex",
    alignItems: "center",
});

const selectors = css({
    display: "flex",
    justifyContent: "space-between",
});

const helpText = css({
    width: "340px",
    padding: "12px",
    color: "#65676b",
    fontSize: "13px",
});

const link = css({
    color: "#0866ff",
    fontSize: "13px",
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days: number[] = [];
for (let i = 1; i < 31; i++) {
    days.push(i);
}

const years: number[] = [];
const yearNow = new Date(Date.now()).getFullYear();

for (let i = 1940; i <= yearNow; i++) {
    years.push(i);
}
years.reverse();

export default function SignUpForm({ handleClose, open }: Props) {
    const [month, setMonth] = useState(months[0]);
    const [day, setDay] = useState(days[0]);
    const [year, setYears] = useState(years[0]);
    const [showHelpBirthday, setShowHelpBirthday] = useState(false);

    const helpEl = useRef<HTMLDivElement | null>(null);

    const changeMonth = (e: SelectChangeEvent<string | number>) => {
        if (typeof e.target.value === "string") {
            setMonth(e.target.value);
        }
    };

    const changeDay = (e: SelectChangeEvent<string | number>) => {
        //there is a bug in MUI - https://github.com/mui/material-ui/issues/33399
        if (typeof e.target.value === "number") {
            setDay(e.target.value);
        }
    };

    const changeYear = (e: SelectChangeEvent<string | number>) => {
        //there is a bug in MUI - https://github.com/mui/material-ui/issues/33399
        if (typeof e.target.value === "number") {
            setYears(e.target.value);
        }
    };

    const toggleHelpBirthday = () => {
        if (showHelpBirthday) {
            setShowHelpBirthday(false);
        } else {
            setShowHelpBirthday(true);
        }
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <div css={container}>
                <div css={header}>
                    <div>
                        <div style={{ fontSize: "32px", fontWeight: 600, lineHeight: "38px" }}>Sign Up</div>
                        <div style={{ fontSize: "15px", color: "#606770", lineHeight: "24px" }}>It’s quick and easy.</div>
                    </div>
                    <CrossCloseButton onClick={handleClose} />
                </div>
                <div css={separator}></div>
                <div css={form}>
                    <div css={name}>
                        <TextField label="First name" variant="outlined" size="small" style={{ width: "194px" }} />
                        <TextField label="Last name" variant="outlined" size="small" style={{ width: "194px" }} />
                    </div>
                    <TextField label="Mobile number or email" variant="outlined" size="small" fullWidth style={{ marginBottom: "10px" }} />
                    <TextField label="New password" variant="outlined" size="small" fullWidth type="password" />
                    <div css={birthday}>
                        <div css={title} ref={helpEl}>
                            <span style={{ paddingTop: "4px" }}>Birthday</span>
                            <ShowTooltipButton onClick={toggleHelpBirthday} />
                        </div>
                        <div css={selectors}>
                            <LoginSelector label="Month" handleChange={changeMonth} items={months} value={month} />
                            <LoginSelector label="Day" handleChange={changeDay} items={days} value={day} />
                            <LoginSelector label="Year" handleChange={changeYear} items={years} value={year} />
                        </div>
                    </div>
                </div>
            </div>
            <Popover
                id="help-birthday"
                open={showHelpBirthday}
                anchorEl={helpEl.current}
                onClose={toggleHelpBirthday}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "right",
                }}
            >
                <div css={helpText}>
                    <b>Providing your birthday</b> helps make sure you get the right Facebook experience for your age. If you want to change who sees
                    this, go to the About section of your profile. For more details, please visit our{" "}
                    <Link href="https://www.facebook.com/privacy/explanation" underline="hover" css={link}>
                        Privacy Policy
                    </Link>
                    .
                </div>
            </Popover>
        </Dialog>
    );
}
