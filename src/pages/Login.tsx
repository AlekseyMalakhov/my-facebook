import { css } from "@emotion/react";

const container = css({
    display: "flex",
    flexDirection: "column",
    height: "100%",
});

const main = css({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    flex: 1,
    minHeight: "720px",
});

const hello = css({});

const helloText = css({
    width: "500px",
    fontSize: "28px",
    lineHeight: "32px",
    fontWeight: "normal",
    paddingBottom: "20px",
    color: "#1c1e21",
});

const loginForm = css({});

const footer = css({
    display: "flex",
    justifyContent: "center",
    margin: "0 40px",
});

const footerContent = css({
    display: "flex",
    flexDirection: "column",
    color: "#8a8d91",
    fontSize: "12px",
    maxWidth: "980px",
});

const langsList = css({
    marginBlock: "0px",
    marginInline: "0px",
    paddingInline: "0px",
    listStyleType: "none",
    paddingTop: "20px",
    li: {
        paddingRight: "10px",
        display: "inline-block",
    },
});

const line = css({
    borderBottom: "1px solid #dddfe2",
    paddingTop: "8px",
    marginBottom: "8px",
});

const copyRight = css({
    margin: "20px 0px",
    fontSize: "11px",
    color: "#737373",
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
            <main css={main}>
                <div css={hello}>
                    <img src="facebook.svg" height={106} style={{ marginLeft: "-28px" }} />
                    <h2 css={helloText}>Connect with friends and the world around you on Facebook.</h2>
                </div>
                <div css={loginForm}>Login Form</div>
            </main>
            <footer css={footer}>
                <div css={footerContent}>
                    <ul css={langsList}>
                        {langs.map((item) => (
                            <li key={item} style={{ lineHeight: 1.6 }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div css={line}></div>
                    <ul css={langsList}>
                        {links.map((item) => (
                            <li key={item} style={{ lineHeight: 1.6 }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div css={copyRight}>Meta © 2024</div>
                </div>
            </footer>
        </div>
    );
}
