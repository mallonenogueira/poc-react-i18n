import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

function ChooseLanguage() {
  const { t, i18n } = useTranslation();

  function handleChangeLang(event: ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div>
      <label htmlFor="choose-language">{t("labels.lang")}</label>

      <select
        id="choose-language"
        value={i18n.language}
        onChange={handleChangeLang}
      >
        <option value="pt-BR">{t("languages.pt")}</option>

        <option value="en">{t("languages.en")}</option>
      </select>
    </div>
  );
}

function App() {
  const { t } = useTranslation();
  const { t: pageTranslate } = useTranslation("pages/app");

  return (
    <div>
      <h1>{t("titles.app", { title: "React i18n" })}</h1>

      <h2>{pageTranslate("title")}</h2>

      <ChooseLanguage />
    </div>
  );
}

export default App;
