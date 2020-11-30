import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { userInput } from "../../app/redux/action";

const AppInput = (props) => {
    const [value, setValue] = useState(0);
    const [isEnter, setIsEnter] = useState(false);

    const _userInput = props.userInput;

    const handleOnInput = (e) => {        
        const _val = e.target.value;        
        if (/^[0-9]*$/.test(_val)) {
            setValue(_val);
        }        
    }

    const handleKeyDown = (e) => {
        const _keyCode = e.keyCode;
        // const _shift = e.shiftKey;

        if (_keyCode === 13) {
            setIsEnter(true);            
        }
    }

    useEffect(() => {
        if (isEnter) {
            console.log(value);
            _userInput(value);
            setIsEnter(false);
            setValue('');
        }
    }, [isEnter, _userInput])

    return (
        <input className="calculator-input" onKeyDown={handleKeyDown} onInput={handleOnInput} value={value}></input>
    );
};

export default connect(
    null,
    { userInput }
  )(AppInput);