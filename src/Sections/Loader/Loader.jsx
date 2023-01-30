import React from "react"
import "./LoaderStyles.css"


export function Loader(){
    return (
        <div className="loader">
            <div className="text-1">KREMESS</div>
            <div className="bar">
                <div className="bar-content"></div>
            </div>
        </div>
    )
}