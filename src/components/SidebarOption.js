import React from "react";
import "./css/SidebarOption.css"

//when we will pass through the props a component
//you need set a camel case on name
function SidebarOption({title, Icon}){
    return(
        <div className="SidebarOption">
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption;