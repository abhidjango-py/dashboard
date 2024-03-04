import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://randomuser.me/portraits/women/54.jpg";
const img2 = "https://randomuser.me/portraits/women/50.jpg";

const arr: DataType[] = [
  {
    avatar: <img src={img1} alt="mariah" style={{ borderRadius: "50%" }} />,
    name: "Mariah Pentos",
    gender: "female",
    email: "pentosmariah@example.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img2} alt="mariah" style={{ borderRadius: "50%" }} />,
    name: "Emily Carlos",
    gender: "female",
    email: "emilycarlos@example.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const customers = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "customersBox", "Customers", true),
    []
  );
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
    </div>
  );
};

export default customers;
