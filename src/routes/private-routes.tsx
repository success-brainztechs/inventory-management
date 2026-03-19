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
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "vendors",
        element: <Vendors />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "purchases",
        element: <Purchases />,
      },
      {
        path: "daily-transactions",
        element: <DailyTransactions />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "payments",
        element: <Payments/>,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "ledger",
        element: <Ledger />,
      },
      {
        path: "finance",
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
