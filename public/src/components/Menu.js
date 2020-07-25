import React from 'react'
import FaSave from './FaSave'
export default (props) => {
    return (
        <div className="menu">
            <span>Work area</span>
            <a href="#save" className="current save css">style<b>.css</b></a>
            <a href="#" className="html">index<b>.html</b></a>
            <a href="#" className="js">javascript<b>.js</b></a>
            <a href="#" className="add"></a>
            <FaSave />
    </div>
    )
}