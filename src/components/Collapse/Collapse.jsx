import React, { useRef, useState } from 'react';
import './Collapse.css'; 

const Collapse = (props) => {
    const [isOpen, setIsOpen] =useState(false);
    const contentRef = useRef();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${props.className}`}>
            <button className='toggle' onClick={toggle}>
                {props.label}
                <i className= {`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"} `}>
                </i>
            </button>
            <div className='content-parent'
            ref={contentRef}
            style={
                isOpen 
                ? { height : contentRef.current.scrollHeight + "px"}
                : { height: "0px"}
            }
            >
                <div className='content'> {props.children}</div>

                </div>
            </div>
    )
}

export default Collapse