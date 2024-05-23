import { css } from "@emotion/react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
    label: string;
    handleChange: (event: SelectChangeEvent) => void;
    items: string[];
    value: string;
};

const container = css({});

export default function LoginSelector({ label, handleChange, items, value }: Props) {
    return (
        <div css={container}>
            <Select value={value} label={label} onChange={handleChange} size="small">
                {items.map((item) => (
                    <MenuItem value={item} key={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}
