import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";

import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quanity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quanity",
    accessor: "quanity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quanity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/poqipoi">Manage</Link>,
  },
  {
    user: "Xavior",
    amount: 6999,
    discount: 400,
    quanity: 6,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/shahswi">Manage</Link>,
  },
  {
    user: "Xavior",
    amount: 6999,
    discount: 400,
    quanity: 6,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/ksahaosh">Manage</Link>,
  },
];

const transactions = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "transactionsBox", "Transactions", true),
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

export default transactions;
