import * as React from 'react'

export default function Celebrate(props) {
    
    const myRef = React.useRef()
    return (
        <div >
                {props.children}
        </div>
    )
}
