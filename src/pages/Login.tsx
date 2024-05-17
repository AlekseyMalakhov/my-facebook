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
    justifyContent: "center",
    margin: "0 40px",
});
const footerContent = css({
    display: "flex",
    flexDirection: "column",
    height: "160px",
    color: "#8a8d91",
    fontSize: "12px",
    maxWidth: "980px",
});
const langsList = css({
    paddingTop: "20px",
    span: {
        paddingRight: "10px",
        display: "inline-block",
    },
});
const line = css({
    borderBottom: "1px solid #dddfe2",
    paddingTop: "8px",
    marginBottom: "8px",
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

const links = [
    "SignUp",
    "LogIn",
    "Messenger",
    "Facebook Lite",
    "Video",
    "Places",
    "Games",
    "Marketplace",
    "Meta Pay",
    "Meta Store",
    "Meta Quest",
    "Meta AI",
    "Instagram",
    "Threads",
    "Fundraisers",
    "Services",
    "Voting",
    "Information Center",
    "Privacy",
    "Policy",
    "Privacy Center",
    "Groups",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Cookies",
    "Ad choices",
    "Terms",
    "Help",
    "Contact Uploading & Non-Users",
];

export default function Login() {
    return (
        <div css={container}>
            <main css={main}>hi all</main>
            <footer css={footer}>
                <div css={footerContent}>
                    <div css={langsList}>
                        {langs.map((item) => (
                            <span key={item} style={{ lineHeight: 1.6 }}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <div css={line}></div>
                    <div css={langsList}>
                        {links.map((item) => (
                            <span key={item} style={{ lineHeight: 1.6 }}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
