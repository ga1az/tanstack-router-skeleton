import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = ["en", "es"];

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		supportedLngs,
		detection: {
			order: ["path", "cookie", "localStorage", "navigator", "querystring"],
			lookupFromPathIndex: 0,
			caches: ["cookie"],
		},
		backend: {
			loadPath: "/locales/{{lng}}/translation.json",
		},
	});

export default i18n;
