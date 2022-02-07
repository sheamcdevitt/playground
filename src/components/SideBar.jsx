import React from "react";
import './sidebar.css'

const SideBar = ({isActive}) => {

    const sidebarContent = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'About',
            icon: 'pi pi-question'
        },
        {
            label: 'More',
            icon: 'pi pi-align-justify'
        }
    ];

    return (
        <div className="content">
            {
                sidebarContent.map(obj => 
                    <div>
                    <li>{obj.label}</li>
                    {isActive && <i className={obj.icon}></i>}
                    </div>
                    
            )}
        </div>
    )
}

export default SideBar;