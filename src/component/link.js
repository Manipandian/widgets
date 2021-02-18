import React from "react";


const Link = ({ href, children, className}) => {
    const anchorClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);
        const newEvent = new PopStateEvent('popstate');
        window.dispatchEvent(newEvent);
    }
    return (
        <a href={href} onClick={anchorClick} className={className}>
            {children}
        </a>
    )
}

export default Link;