import { css } from "@emotion/react";

const container = css({
    display: "flex",
    flexDirection: "column",
    height: "100%",
});
const main = css({
    display: "flex",
    backgroundColor: "#f0f2f5",
    flex: 1,
});
const footer = css({
    display: "flex",
    height: "160px",
    color: "#8a8d91",
    fontSize: "12px",
});
//nth-child(n+1)
const langsList = css({
    margin: "0 40px",
    paddingTop: "20px",
    "span:nth-child(n+1)": {
        paddingLeft: "10px",
    },
});

const langs = [
    "English (US)",
    "Русский",
    "Беларуская",
    "العربية",
    "Türkçe",
    "Polski",
    "Italiano",
    "Tiếng Việt",
    "Deutsch",
    "Español",
    "Português (Brasil)",
];

export default function Login() {
    return (
        <div css={container}>
            <main css={main}>hi all</main>
            <footer css={footer}>
                <div css={langsList}>
                    {langs.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </footer>
        </div>
    );
}
