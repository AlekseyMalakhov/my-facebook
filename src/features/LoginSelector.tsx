import { css } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useId } from "react";

type Props = {
    label: string;
    handleChange: (event: SelectChangeEvent<string | number>) => void;
    items: string[] | number[];
    value: string | number;
};

const container = css({
    marginTop: "10px",
});

export default function LoginSelector({ label, handleChange, items, value }: Props) {
    const id = useId();
    return (
        <div css={container}>
            <FormControl size="small">
                <InputLabel id={id}>{label}</InputLabel>
                <Select value={value} label={label} labelId={id} onChange={handleChange} size="small" style={{ width: "125px" }}>
                    {items.map((item) => (
                        <MenuItem value={item} key={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
