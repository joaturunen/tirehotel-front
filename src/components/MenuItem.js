import React from "react";
import { NavLink, Link } from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

 const MenuItem = (props) => {
    const { name, subMenus, icon, to } = props;

    return (
        <li onClick={props.onClick}>
          <Link
            exact
            to={to}
           
            className={`menu-item`}
          >
            <div className="menu-icon">
              <i class={icon}></i>
            </div>
            <span>{name}</span>
          </Link>
          {subMenus && subMenus.length > 0 ? (
            <ul className={`sub-menu`}>
              {subMenus.map((menu, index) => (
                <li key={index}>
                  <NavLink to={menu.to}>{menu.name}</NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    };
    
    export default MenuItem;

