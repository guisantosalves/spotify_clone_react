import React from "react";
import "./css/SidebarOption.css"

//when we will pass through the props a component
//you need set a camel case on name
function SidebarOption({title, Icon}){
    return(
        <div className="SidebarOption">
            {Icon && <Icon className="SidebarOption__icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;