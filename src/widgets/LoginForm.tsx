import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

const paper = css({
    width: "396px",
    "&.MuiPaper-rounded": {
        borderRadius: "5px",
    },
});

const container = css({
    padding: "15px",
    textAlign: "center",
});

const loginButton = css({
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#0866ff",
    fontSize: "20px",
    textTransform: "none",
    fontWeight: 700,
    marginTop: "5px",
});

const link = css({
    color: "#0866ff",
    fontSize: "14px",
});

const separator = css({
    borderBottom: "1px solid #dadde1",
    margin: "20px 0px",
});

const createButton = css({
    height: "48px",
    borderRadius: "6px",
    backgroundColor: "#42b72a",
    fontSize: "17px",
    textTransform: "none",
    fontWeight: 700,
    marginTop: "5px",
    marginBottom: "10px",
});

export default function LoginForm() {
    const [showSignUp, setShowSignUp] = useState(false);

    const closeSignUp = () => {
        setShowSignUp(false);
    };

    return (
        <div>
            <Paper css={paper} elevation={3}>
                <div css={container}>
                    <TextField id="outlined-basic" label="Email or phone number" variant="outlined" fullWidth style={{ paddingBottom: "12px" }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth type="password" style={{ paddingBottom: "12px" }} />
                    <Button variant="contained" fullWidth css={loginButton}>
                        Log In
                    </Button>
                    <div style={{ marginTop: "16px", textAlign: "center" }}>
                        <Link href="#" underline="hover" css={link}>
                            Forgot password?
                        </Link>
                    </div>
                    <div css={separator}></div>
                    <Button variant="contained" css={createButton} onClick={() => setShowSignUp(true)}>
                        Create new account
                    </Button>
                </div>
            </Paper>
            <div style={{ marginTop: "28px", fontSize: "14px", textAlign: "center" }}>
                <Link href="#" underline="hover" style={{ color: "black", fontWeight: 600 }}>
                    Create a Page
                </Link>{" "}
                for a celebrity, brand or business.
            </div>
            <SignUpForm open={showSignUp} handleClose={closeSignUp} />
        </div>
    );
}
