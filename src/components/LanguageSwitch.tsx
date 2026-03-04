import { useTranslation } from "react-i18next";
import "../style/languageSwitch.scss"

export function LanguageSwitch() {
    const { i18n } = useTranslation();
    const activeLanguage = (i18n.resolvedLanguage ?? i18n.resolvedLanguage ?? "en").toLowerCase().startsWith("de") ? "de" : "en";
    const nonActiveLanguage = (i18n.resolvedLanguage ?? "en").toLowerCase().startsWith("de") ? "en" : "de";

    const setLanguage = (language: "en" | "de") => {
        if (activeLanguage !== language) {
            i18n.changeLanguage(language);
        }
    }

    function toggleLanguage() {
        const newLanguage = activeLanguage === "en" ? "de" : "en";
        console.log(newLanguage);
        document.documentElement.lang = newLanguage;
        setLanguage(newLanguage);
    }

    return (
        <>
            <button onClick={toggleLanguage} className="toggleLanguage">
                {nonActiveLanguage.toUpperCase()}
            </button>
        </>
    );
}