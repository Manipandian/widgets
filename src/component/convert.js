import React, {useEffect, useState} from  "react";
import axios from "axios";

const Convert = ({ text, language }) => {
    const [translate, setTranslate] = useState("");
    const [debounceText, setDebounceText] = useState(text);

    useEffect(() => {
        const bounceTimer = setTimeout(() => {
            setDebounceText(text);
        }, 500);
        return () => {
            clearTimeout(bounceTimer);
        }
    }, [text])

    useEffect(() => {
        const translateText = async () => {
            const response = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            setTranslate(response.data.data.translations[0].translatedText);
        }
        translateText();
    }, [debounceText, language]);

    return (
        <div>
            <h1 className="ui header">
                {translate}
            </h1>
        </div>
    )
}

export default Convert;