import { translate } from "api-translator";
import { Locale } from "api-translator/dist/types/locales";

export function translateQuote(quote: string, to: Locale) {
  return translate(quote, {
    from: "auto",
    to,
  });
}