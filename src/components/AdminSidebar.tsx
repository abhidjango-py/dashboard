import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      {/* First div */}
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            location={location}
            Icon={RiDashboardFill}
          />
          <Li
            url="/admin/products"
            text="Products"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          <Li
            url="/admin/customers"
            text="Customers"
            location={location}
            Icon={IoIosPeople}
          />
          <Li
            url="/admin/transactions"
            text="Transactions"
            location={location}
            Icon={AiFillFileText}
          />
        </ul>
      </div>
      {/* Second div */}
      <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/chart/bar"
            text="Bar"
            location={location}
            Icon={FaChartBar}
          />
          <Li
            url="/admin/chart/pie"
            text="Pie"
            location={location}
            Icon={FaChartPie}
          />
          <Li
            url="/admin/chart/line"
            text="Line"
            location={location}
            Icon={FaChartLine}
          />
        </ul>
      </div>
      {/* Third div */}
      <div>
        <h5>Apps</h5>
        <ul>
          <Li
            url="/admin/app/stopwatch"
            text="Stopwatch"
            location={location}
            Icon={FaStopwatch}
          />
          <Li
            url="/admin/app/coupon"
            text="Coupon"
            location={location}
            Icon={RiCoupon3Fill}
          />
          <Li
            url="/admin/app/toss"
            text="Toss"
            location={location}
            Icon={FaGamepad}
          />
        </ul>
      </div>
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,225,0.1)"
        : "white",
    }}
  >
    <Link
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,225)" : "black",
      }}
      to={url}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
