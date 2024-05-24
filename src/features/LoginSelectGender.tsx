import { css } from "@emotion/react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
export type Gender = "female" | "male" | "other";
type Props = {
    value: Gender;
    handleChange: (value: Gender) => void;
};

const container = css({});

export default function LoginSelectGender({ value, handleChange }: Props) {
    const handle = (event: React.ChangeEvent<HTMLInputElement>, val: string) => {
        //type guard
        if (val === "female" || val === "male" || val === "other") {
            handleChange(val);
        }
    };
    return (
        <div css={container}>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handle}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
