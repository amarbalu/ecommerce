import { Sidebarcontainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredResult, selectedMenu } from "../../actions";
const useFilteredMenus = (filters, menu, subMenuAction) => {
  const finalFilters = [];
  for (let item in filters) {
    finalFilters.push(
      <li key={item} id={item} className="head-list">
        <a
          href="#homeSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          id={item}
          onClick={(e) => e.preventDefault()}
        >
          {item}
        </a>
        <ul className=" list-unstyled subMenu" id={item}>
          {filters[item].map((subMenu) => {
            return (
              <li
                key={subMenu}
                className={`menu ${menu === subMenu ? "active" : ""}`}
              >
                <a
                  href="eval(javascript:void(0))"
                  onClick={(e) => subMenuAction(e, item, subMenu)}
                >
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
  const menu = useSelector((state) => state.menu);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const subMenuAction = (e, item, subMenu) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(selectedMenu(subMenu));
    dispatch(fetchFilteredResult(item, subMenu));
  };
  const filterItems = useFilteredMenus(filters, menu, subMenuAction);

  return (
    <Sidebarcontainer>
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li className={`menu ${menu === "all" ? "active" : ""} head-list`}>
            <a
              href="eval(javascript:void(0))"
              onClick={(e) => {
                e.preventDefault();
                dispatch(selectedMenu("all"));
                dispatch(fetchFilteredResult("all", ""));
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
