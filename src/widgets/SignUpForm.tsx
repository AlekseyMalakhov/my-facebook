import { css } from "@emotion/react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import LoginSelector from "../features/LoginSelector";
import { SelectChangeEvent } from "@mui/material/Select";

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

const birthday = css({});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function SignUpForm({ handleClose, open }: Props) {
    const [month, setMonth] = useState(months[0]);

    const changeMonth = (e: SelectChangeEvent) => {
        setMonth(e.target.value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <div css={container}>
                <div css={header}>
                    <div>
                        <div style={{ fontSize: "32px", fontWeight: 600, lineHeight: "38px" }}>Sign Up</div>
                        <div style={{ fontSize: "15px", color: "#606770", lineHeight: "24px" }}>It’s quick and easy.</div>
                    </div>
                    <div>Close</div>
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
                        <LoginSelector label="Month" handleChange={changeMonth} items={months} value={month} />
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
