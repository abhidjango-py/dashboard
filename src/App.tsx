import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Customers = lazy(() => import("./pages/customers"));
const Transactions = lazy(() => import("./pages/transactions"));
const BarChart = lazy(() => import("./pages/barChart"));
const PieChart = lazy(() => import("./pages/pieChart"));
const LineChart = lazy(() => import("./pages/lineChart"));
const Stopwatch = lazy(() => import("./pages/stopwatch"));
const Coupon = lazy(() => import("./pages/coupon"));
const Toss = lazy(() => import("./pages/toss"));
const NewProduct = lazy(() => import("./pages/management/newProducts"));
const ProductManagement = lazy(
  () => import("./pages/management/productManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/transactionManagement")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* main */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/customers" element={<Customers />} />

          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/pie" element={<PieChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />

          {/* apps */}
          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
