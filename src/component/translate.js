import React, {useState, useEffect} from  "react";
import DropDown from "./dropDown";
import Convert from "./convert";

//API key for translate
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM



const options = [
    {
        label: "African",
        value: "af"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Chinese",
        value: "zh-CN"
    },
    {
        label: "Tamil",
        value: "ta"
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <DropDown options={options} selected={language} onSelectedChange={setLanguage} label="Select Language" />
            <hr />
            <h3 className="ui header">Output Text</h3>
            <Convert text={text} language={language} />

        </div>
    )
}

export default Translate;