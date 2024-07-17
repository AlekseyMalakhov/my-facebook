import { css } from "@emotion/react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
//export type Gender = "female" | "male" | "other";
import { Gender } from "../gql/graphql";
type Props = {
    value: Gender;
    handleChange: (value: Gender) => void;
};

const container = css({});

const button = css({
    border: "1px solid #ccd0d5",
    borderRadius: "4px",
    flex: 1,
    marginLeft: "13px",
    display: "flex",
});

const selectors = css({
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
});

const radioGr = {
    "&.MuiRadioGroup-root": {
        flex: 1,
    },
};

const formCL = {
    "&.MuiFormControlLabel-root": {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "0px",
        marginRight: "0px",
    },
    "& .MuiFormControlLabel-label": {
        paddingLeft: "9px",
    },
};

export default function LoginSelectGender({ value, handleChange }: Props) {
    const handle = (_event: React.ChangeEvent<HTMLInputElement>, val: string) => {
        //bug in radio control MUI. Can't pass types directly
        if (val === "female") {
            handleChange(Gender.Female);
        }
        if (val === "male") {
            handleChange(Gender.Male);
        }
        if (val === "other") {
            handleChange(Gender.Other);
        }
        console.log(val);
    };
    return (
        <div css={container}>
            <FormControl fullWidth>
                <RadioGroup
                    sx={radioGr}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handle}
                >
                    <div css={selectors}>
                        <div css={button} style={{ marginLeft: "0px" }}>
                            <FormControlLabel value={Gender.Female} control={<Radio />} label="Female" labelPlacement="start" sx={formCL} />
                        </div>
                        <div css={button}>
                            <FormControlLabel value={Gender.Male} control={<Radio />} label="Male" labelPlacement="start" sx={formCL} />
                        </div>
                        <div css={button}>
                            <FormControlLabel value={Gender.Other} control={<Radio />} label="Other" labelPlacement="start" sx={formCL} />
                        </div>
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
}
