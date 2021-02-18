import React, {useState, useEffect, useRef} from "react";


const DropDown = ( { options, selected, onSelectedChange, label } ) => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef();

    const listOfOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div className="item" key={option.label} onClick={() => {
                onSelectedChange(option)}}>
                {option.label}
            </div>
        )
    })

    useEffect(() => {
        const bodyClick = (arg) => {
            if(dropDownRef.current && dropDownRef.current.contains(arg.target)) {
                return;
            }
            setOpen(false);
        }
        // document.body.addEventListener('click', bodyClick, {capture: true})
        document.body.addEventListener('click', bodyClick)
        return () => {
            document.body.removeEventListener('click', bodyClick);
        }
    }, []);

    return (
        <React.Fragment>
        <div ref={dropDownRef} className="ui form" >
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => {
                    setOpen(!open)
                } } className={`ui selection dropdown ${open ? "visible active" : ""}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {listOfOptions}
                    </div>
                </div>
            </div>
        </div>
            {/* <div style={{color: selected.value}}>This text is in {selected.label} color</div> */}
        </React.Fragment>

    )
}

export default DropDown;