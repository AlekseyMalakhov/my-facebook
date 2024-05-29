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
import LoginSelectGender from "../features/LoginSelectGender";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { ADD_USER_MUTATION } from "../shared/api/queries/mutations";
import { Gender, RegDeviceType } from "../gql/graphql";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
    handleClose: (event: object, reason: string) => void;
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

const link2 = css({
    color: "#385898",
    fontSize: "11px",
});

const notification = css({
    fontSize: "11px",
    marginTop: "20px",
    color: "#777",
});

const signUpButton = css({
    backgroundColor: "#00a400",
    height: "36px",
    fontSize: "18px",
    padding: "0 32px",
    "&:hover": {
        background: "linear-gradient(#79bc64, #578843)",
    },
    textTransform: "none",
    fontWeight: "bold",
    width: "194px",
    marginTop: "10px",
    marginBottom: "10px",
});

const signUpButtonContainer = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
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
    const [gender, setGender] = useState<Gender>(Gender.Female);
    const [showHelpBirthday, setShowHelpBirthday] = useState(false);
    const [showHelpGender, setShowHelpGender] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [regDevice, setRegDevice] = useState("");

    const helpBirthdayEl = useRef<HTMLDivElement | null>(null);
    const helpGenderEl = useRef<HTMLDivElement | null>(null);

    const [addUser, { loading }] = useMutation(ADD_USER_MUTATION, { onCompleted: () => handleClose({}, "") });

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

    const toggleHelpGender = () => {
        if (showHelpGender) {
            setShowHelpGender(false);
        } else {
            setShowHelpGender(true);
        }
    };

    const signUp = () => {
        const monthIndex = months.findIndex((item) => item === month);
        const birthday = new Date(year, monthIndex, day);

        let regDeviceType = RegDeviceType.Phone;
        if (regDevice.includes("@")) {
            regDeviceType = RegDeviceType.Email;
        }

        const data = {
            first_name: firstName,
            last_name: lastName,
            //GraphQL does not have type for a 64bit integer. We can use Float...but it doesn't have fractional part
            //so...let it be a String
            birthday: birthday.valueOf().toString(),
            gender,
            reg_device: {
                type: regDeviceType,
                value: regDevice,
            },
            password,
        };

        addUser({
            variables: {
                input: data,
            },
        });
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
                        <TextField
                            value={firstName}
                            label="First name"
                            variant="outlined"
                            size="small"
                            style={{ width: "194px" }}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            value={lastName}
                            label="Last name"
                            variant="outlined"
                            size="small"
                            style={{ width: "194px" }}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div css={birthday}>
                        <div css={title} ref={helpBirthdayEl}>
                            <span style={{ paddingTop: "4px" }}>Birthday</span>
                            <ShowTooltipButton onClick={toggleHelpBirthday} />
                        </div>
                        <div css={selectors}>
                            <LoginSelector label="Month" handleChange={changeMonth} items={months} value={month} />
                            <LoginSelector label="Day" handleChange={changeDay} items={days} value={day} />
                            <LoginSelector label="Year" handleChange={changeYear} items={years} value={year} />
                        </div>
                    </div>
                    <div css={birthday}>
                        <div css={title} ref={helpGenderEl}>
                            <span style={{ paddingTop: "4px" }}>Gender</span>
                            <ShowTooltipButton onClick={toggleHelpGender} />
                        </div>
                        <LoginSelectGender value={gender} handleChange={setGender} />
                    </div>
                    <TextField
                        label="Mobile number or email"
                        variant="outlined"
                        size="small"
                        fullWidth
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                        value={regDevice}
                        onChange={(e) => setRegDevice(e.target.value)}
                    />
                    <TextField
                        label="New password"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div css={notification}>
                        <div style={{ marginBottom: "10px" }}>
                            <span>People who use our service may have uploaded your contact information to Facebook. </span>
                            <Link href="#" underline="hover" css={link2}>
                                Learn more...
                            </Link>
                        </div>
                        <div>
                            <span>By clicking Sign Up, you agree to our </span>
                            <Link href="#" underline="hover" css={link2}>
                                Terms
                            </Link>
                            <span>, </span>
                            <Link href="#" underline="hover" css={link2}>
                                Privacy Policy
                            </Link>
                            <span> and </span>
                            <Link href="#" underline="hover" css={link2}>
                                Cookies Policy
                            </Link>
                            <span>. You may receive SMS Notifications from us and can opt out any time.</span>
                        </div>
                    </div>
                    <div css={signUpButtonContainer}>
                        <Button variant="contained" css={signUpButton} onClick={signUp}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
            <Popover
                open={showHelpBirthday}
                anchorEl={helpBirthdayEl.current}
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
            <Popover
                open={showHelpGender}
                anchorEl={helpGenderEl.current}
                onClose={toggleHelpGender}
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
                    You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.
                </div>
            </Popover>
            {loading ? (
                <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            ) : null}
        </Dialog>
    );
}
