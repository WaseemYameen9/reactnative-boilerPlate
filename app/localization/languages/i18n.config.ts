import i18next from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import { en} from "./languages";
import { fr } from "./languages";
import {urdu} from "./languages"

const resources ={
    en:{
        translation:en,
    },
    fr:{
        translation:fr
    },
    urdu:{
        translation:urdu
    }
}


i18next.use(initReactI18next).init({
    
    lng:'en',
    //language to use if user language is not available 
    fallbackLng:'en',
    resources,
})

export default i18next; 