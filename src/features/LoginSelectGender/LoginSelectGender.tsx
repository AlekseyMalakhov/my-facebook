import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Gender } from "../../gql/graphql";
import { container, button, selectors, radioGr, formCL } from "./LoginSelectGender.css";

type Props = {
    value: Gender;
    handleChange: (value: Gender) => void;
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
        //console.log(val);
    };
    return (
        <div className={container}>
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
                    <div className={selectors}>
                        <div className={button} style={{ marginLeft: "0px" }}>
                            <FormControlLabel value={Gender.Female} control={<Radio />} label="Female" labelPlacement="start" sx={formCL} />
                        </div>
                        <div className={button}>
                            <FormControlLabel value={Gender.Male} control={<Radio />} label="Male" labelPlacement="start" sx={formCL} />
                        </div>
                        <div className={button}>
                            <FormControlLabel value={Gender.Other} control={<Radio />} label="Other" labelPlacement="start" sx={formCL} />
                        </div>
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
}
