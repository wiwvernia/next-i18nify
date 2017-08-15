import { I18n } from 'react-i18nify'
import th from "./th.json"
import en from "./en.json"
import jp from "./jp.json"

I18n.setTranslations({
    th,
    en,
    jp,
});

// เราจะกำหนดภาษาเริ่มต้นของเราเป็นภาษาไทยนะครับ
I18n.setLocale('th')

// เราจะต้อง export library ของ I18n เพิ่อไปใช้ใน File อื่น
export const locale = I18n
