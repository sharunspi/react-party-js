import * as React from 'react'
import party from 'party-js'
export default function Celebrate(props) {
    
    const myRef = React.useRef()
    return (
        <div >
                {props.children}
        </div>
    )
}
