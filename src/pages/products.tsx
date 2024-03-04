import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://m.media-amazon.com/images/I/41V8SVS91ZL._SY625_.jpg";
const img2 = "https://m.media-amazon.com/images/I/51hJIsWMagL._SL1280_.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 630,
    stock: 3,
    action: <Link to="/admin/product/sdaskasdnao">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Laptop" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskasdnao">Manage</Link>,
  },
];

const products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "productBox", "Products"),
    []
  );
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="productButton">
        <FaPlus />
      </Link>
    </div>
  );
};

export default products;
