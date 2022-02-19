import { useSelector } from "react-redux";
import { Sidebarcontainer } from "./styles";

const filterItemWithSubmenu = (filters) => {
  const finalFilters = [];
  for (let item in filters) {
    finalFilters.push(
      <li>
        <a
          href={`#${item}submenu`}
          data-toggle="collapse"
          aria-expanded="false"
          className="nav-link "
        >
          <span className="ms-1 ">{item.toUpperCase()}</span>
        </a>

        <ul
          className="collapse show nav flex-column ms-1"
          id={`#${item}submenu`}
          data-bs-parent="#sidebar-menu"
        >
          {filters[item].map((value) => (
            <li key={value} id={value}>
              <a
                href="#"
                className="nav-link px-0"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(e.target.id);
                }}
              >
                <span className="nav-link">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return finalFilters;
};
const Sidebar = () => {
  const filters = useSelector((state) => state.filters);
  return (
    <Sidebarcontainer>
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <ul className="nav nav-pills flex-column " id="sidebar-menu">
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <span className="ms-1 ">All</span>
            </a>
          </li>

          {filterItemWithSubmenu(filters)}
        </ul>
      </div>
    </Sidebarcontainer>
  );
};

export default Sidebar;
