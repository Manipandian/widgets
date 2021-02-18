import React, {useState} from "react";
import Accordion from "./component/accordion";
import Search from "./component/search";
import DropDown from "./component/dropDown"
import Translate from "./component/translate";
import Route from "./component/router";
import Header from "./component/header";


const items = [
    {
        title: "What is react?",
        content: "Its a front end library based frame work"
    },
    {
        title: "Why react?",
        content: "Its famous around front end engineers because of it component based structure and virtual dom concept"
    },
    {
        title: "What is purpose of front end framework?",
        content: "It avoid some boiler plate configurations which is common for all new projects. It simplify DOM access and state management for app. Provide simple structure to create reusable components and what not"
    }
];

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


const App = () => {
    const[selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/widgets">
                <Accordion items={items}/>
            </Route>
            <Route path="/widgets/list">
                <Search />
            </Route>
            <Route path="/widgets/dropdown">
                <DropDown 
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    label="Select language"
                    />
            </Route>
            <Route path="/widgets/translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App;