import { css } from "@emotion/react";

type Props = {
    item: {
        id: number;
        value: string;
        title: string;
        icon: {
            type: string;
            url: string;
            position: string;
        };
    };
};

const container = css({});

export default function ListElement({ item }: Props) {
    const { value, title, icon } = item;
    return <div css={container}>{title}</div>;
}
