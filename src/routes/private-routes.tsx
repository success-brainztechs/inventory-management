// ==============================|| KYC FORM ROUTING ||============================== //

import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./components/protectedRoute";
import Home from "@/pages/Dashboard/Main/Home";
import Products from "@/pages/Dashboard/Main/Products";
import Vendors from "@/pages/Dashboard/Main/Vendors";
import Customers from "@/pages/Dashboard/Main/Customers";
import Locations from "@/pages/Dashboard/Main/Locations";
import Purchases from "@/pages/Dashboard/Operations/Purchases";
import DailyTransactions from "@/pages/Dashboard/Operations/DailyTransactions";
import Inventory from "@/pages/Dashboard/Operations/Inventory";
import Invoices from "@/pages/Dashboard/Operations/Invoices";
import Payments from "@/pages/Dashboard/Operations/Payments";
import Reports from "@/pages/Dashboard/Reports/Reports";
import Ledger from "@/pages/Dashboard/Reports/Ledger";
import Finance from "@/pages/Dashboard/Reports/Finance";
import Users from "@/pages/Dashboard/Users";
import Settings from "@/pages/Dashboard/Settings";

const PrivateRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "main",
        element: <Home />,
      },
      {
        path: "main/products",
        element: <Products />,
      },
      {
        path: "main/vendors",
        element: <Vendors />,
      },
      {
        path: "main/customers",
        element: <Customers />,
      },
      {
        path: "main/locations",
        element: <Locations />,
      },
      {
        path: "operations/purchases",
        element: <Purchases />,
      },
      {
        path: "operations/daily-transactions",
        element: <DailyTransactions />,
      },
      {
        path: "operations/inventory",
        element: <Inventory />,
      },
      {
        path: "operations/invoices",
        element: <Invoices />,
      },
      {
        path: "operations/payments",
        element: <Payments/>,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "reports/ledger",
        element: <Ledger />,
      },
      {
        path: "reports/finance",
        element: <Finance />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
    ],
  },
];

export default PrivateRoutes;
