import { Sidebarcontainer } from "./styles";

const Sidebar = () => {
  return (
    <Sidebarcontainer>
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
        <ul class="nav nav-pills flex-column " id="menu">
          <li class="nav-item">
            <a href="#" class="nav-link align-middle px-0">
              <i class="fs-4 bi-house"></i> <span class="ms-1 ">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle"
            >
              <i class="fs-4 bi-speedometer2"></i>{" "}
              <span class="ms-1 ">Dashboard</span>{" "}
            </a>
            <ul
              class="collapse show nav flex-column ms-1"
              id="submenu1"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Item</span> 1{" "}
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Item</span> 2{" "}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-table"></i> <span class="ms-1 ">Orders</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle "
            >
              <i class="fs-4 bi-bootstrap"></i>{" "}
              <span class="ms-1 ">Bootstrap</span>
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Item</span> 1
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Item</span> 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle"
            >
              <i class="fs-4 bi-grid"></i> <span class="ms-1 ">Products</span>{" "}
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id="submenu3"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Product</span> 1
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Product</span> 2
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Product</span> 3
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="">Product</span> 4
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fs-4 bi-people"></i>{" "}
              <span class="ms-1 ">Customers</span>{" "}
            </a>
          </li>
        </ul>
      </div>

      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="#homeSubmenu" data-toggle="toggle" aria-expanded="false">
            Home
          </a>
          <ul class="toggle list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul> */}
    </Sidebarcontainer>
  );
};

export default Sidebar;
