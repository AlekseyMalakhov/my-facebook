import LoginForm from "../../widgets/LoginForm/LoginForm";
import { container, main, container2, hello, helloText, footer, footerContent, langsList, line, copyRight, listItem } from "./Login.css";

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
        <div className={container}>
            <main className={main}>
                <div className={container2}>
                    <div className={hello}>
                        <img src="/facebook.svg" height={106} style={{ marginLeft: "-28px" }} />
                        <h2 className={helloText}>Connect with friends and the world around you on Facebook.</h2>
                    </div>
                    <LoginForm />
                </div>
            </main>
            <footer className={footer}>
                <div className={footerContent}>
                    <ul className={langsList}>
                        {langs.map((item) => (
                            <li key={item} className={listItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className={line}></div>
                    <ul className={langsList}>
                        {links.map((item) => (
                            <li key={item} className={listItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className={copyRight}>Meta © 2024</div>
                </div>
            </footer>
        </div>
    );
}
