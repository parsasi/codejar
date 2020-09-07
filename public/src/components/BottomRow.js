import React from 'react'
import StatusBarLogic from './StatusbarLogic'
import '../styles/BottomRow.css'
export default function BottomRow(props){
    return (
        <div className="BottomRowContainer">
            <StatusBarLogic />
        </div>
    )
}