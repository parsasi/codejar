import React from 'react'
import Monaco from './Monaco'
export default (props) => {
    return (
        <div className="code">
            <Monaco width={100 + '%'} height={100+'vh'} />
        </div>
    )
}