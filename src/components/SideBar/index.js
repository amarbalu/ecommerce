import { useState } from "react";
import { Sidebarcontainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredResult } from "../../actions";
const useFilteredMenus = (filters, menu, menuAction, subMenuAction) => {
  const finalFilters = [];
  for (let item in filters) {
    finalFilters.push(
      <li id={item} onClick={menuAction} className="head-list">
        <a
          href="#homeSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          id={item}
        >
          {item}
        </a>
        <ul class=" list-unstyled subMenu" id={item}>
          {filters[item].map((subMenu) => {
            return (
              <li className={`menu ${menu === subMenu ? "active" : ""}`}>
                <a href="#" onClick={(e) => subMenuAction(e, item, subMenu)}>
                  {subMenu}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
  return finalFilters;
};

const Sidebar = () => {
  const [menu, setMenu] = useState("all");
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const menuAction = (submenu) => {
    setMenu(submenu);
  };
  const subMenuAction = (e, item, subMenu) => {
    e.stopPropagation();
    setMenu(subMenu);
    dispatch(fetchFilteredResult(item, subMenu));
  };
  const filterItems = useFilteredMenus(
    filters,
    menu,
    menuAction,
    subMenuAction
  );

  return (
    <Sidebarcontainer>
      <nav id="sidebar">
        <ul class="list-unstyled components">
          <li className={`menu ${menu === "all" ? "active" : ""} head-list`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("all");
                dispatch(fetchFilteredResult("All", ""));
              }}
            >
              <span className="ms-1 ">All</span>
            </a>
          </li>
          {filterItems}
        </ul>
      </nav>
    </Sidebarcontainer>
  );
};

export default Sidebar;
