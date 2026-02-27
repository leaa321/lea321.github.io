import i18next from "i18next"


export function LanguageSwitch{
    const activeLanguage = (i18next.resolvedLanguage ?? i18next.resolvedLanguage ?? "en").toLowerCase().startsWith("de") ? "de" : "en";

    function toggleLanguage() {
        const newLanguage = activeLanguage === "en" ? "de" : "en";
    }

    return (
        <>
            <button onClick={toggleLanguage()}>

            </button>
        </>
    )
}