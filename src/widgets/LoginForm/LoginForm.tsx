import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useMutation } from "@apollo/client";
import { RegDeviceType } from "../../gql/graphql";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "../../shared/api/queries/mutations";
import { paper, container, loginButton, link, link2, separator, createButton } from "./LoginForm.css";

export default function LoginForm() {
    const navigate = useNavigate();
    const [showSignUp, setShowSignUp] = useState(false);
    const [password, setPassword] = useState("");
    const [regDevice, setRegDevice] = useState("");

    const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted: () => navigate("/home") });

    const handleLogin = () => {
        let regDeviceType = RegDeviceType.Phone;
        if (regDevice.includes("@")) {
            regDeviceType = RegDeviceType.Email;
        }

        const data = {
            reg_device: {
                type: regDeviceType,
                value: regDevice,
            },
            password,
        };

        login({
            variables: {
                input: data,
            },
        });
    };

    const closeSignUp = (_event: object, reason: string) => {
        if (reason !== "backdropClick") {
            setShowSignUp(false);
        }
    };

    return (
        <div>
            <Paper className={paper} elevation={3}>
                <div className={container}>
                    <TextField
                        label="Email or phone number"
                        variant="outlined"
                        fullWidth
                        style={{ paddingBottom: "12px" }}
                        value={regDevice}
                        onChange={(e) => setRegDevice(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        style={{ paddingBottom: "12px" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" fullWidth className={loginButton} onClick={handleLogin}>
                        Log In
                    </Button>
                    <div style={{ marginTop: "16px", textAlign: "center" }}>
                        <Link to="#" className={link}>
                            Forgot password?
                        </Link>
                    </div>
                    <div className={separator}></div>
                    <Button variant="contained" className={createButton} onClick={() => setShowSignUp(true)}>
                        Create new account
                    </Button>
                </div>
            </Paper>
            <div style={{ marginTop: "28px", fontSize: "14px", textAlign: "center" }}>
                <Link to="#" className={link2}>
                    Create a Page
                </Link>
                <span> for a celebrity, brand or business.</span>
            </div>
            <SignUpForm open={showSignUp} handleClose={closeSignUp} />
            {loading ? (
                <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            ) : null}
        </div>
    );
}
