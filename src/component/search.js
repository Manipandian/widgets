import React, { useState, useEffect } from "react";
import axios from "axios";


const Search = () => {
    const [term, setTerm] = useState('Cars');

    //To avoid warning regarding calling a state inside useEffect
    const [debounceTerm, setDebounceTerm] = useState('Cars');
    const [results, setResults] = useState([]);

    useEffect(() => { 
        const timerId = setTimeout(() => {
            setDebounceTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    format: "json",
                    list: "search",
                    srsearch: debounceTerm,
                    origin: "*"
                }
            })
            setResults(data.query.search);
        }
        if(debounceTerm !== "") {
            search();
        }
    }, [debounceTerm])



    // useEffect(() => {
    //     //to call async action
    //     const search = async () => {
    //         const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //             params: {
    //                 action: "query",
    //                 format: "json",
    //                 list: "search",
    //                 srsearch: term,
    //                 origin: "*"
    //             }
    //         })
    //         setResults(data.query.search);
    //     }
    //     if(term && !results.length) {
    //         search();
    //     } else {
    //         // To create throttling effect of search
    //         const timer = setTimeout(() => {   
    //             if(term) {
    //                 search();
    //             }
    //         }, 500);
    //         // It will get called before start rerendering like clean up
    //         return () => {
    //             clearTimeout(timer);
    //         }
    //     }
        
    // }, [term]);

    const renderResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* It leads to xss attack, dont use it ever */}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })

    return (
        <div>
            {/* <div className="ui segment"> */}
            <div className="ui form">
                <label>Enter search term</label>
                <input type="text"  className="input" value={term} onChange={e => setTerm(e.target.value)}></input>
            </div>
            <div className="ui celled list">
                {renderResult}
            </div>
            {/* </div> */}
        </div>
    )
}

export default Search;