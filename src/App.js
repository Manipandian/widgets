import React from "react";
import Accordion from "./component/accordion";


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
]

const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}

export default App;