import React, {useState} from  "react";





const Accordion = props => {
    const [activeIndex, setActiveIndex] = useState(null);

    //Helper functions for component
    const onTitleClick = (itemIndex) => {
        if(itemIndex === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(itemIndex);
        }
        
    }

    const accortionItems = props.items.map((item, index) => {
        const active = index === activeIndex ? "active" : ""
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick= {() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>

            </React.Fragment>
        )
    })


    return (
        <div className="ui styled accordion">
            {accortionItems}
        </div>
    )
}

export default Accordion;