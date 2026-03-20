import type {
  DashboardStats,
  DashboardTransactions,
} from "@/types/analytics-stats-types"

export const mockDashboardStats: DashboardStats = {
  inventory_value: 141250,
  transactions_today: 4,
  pending_invoicing: 55000,
  outstanding_balance: 84888,
}

export const mockTodayTransactions: DashboardTransactions[] = [
  {
    transaction_id: "txn-1",
    product: "Jagadamba Cement",
    vendor: "Biththal Builders",
    quantity: 10,
    price: 2400,
    status: "pending",
  },
  {
    transaction_id: "txn-2",
    product: "Stainless Steel 24mm",
    vendor: "Aasvi Steels",
    quantity: 20,
    price: 13600,
    status: "pending",
  },
  {
    transaction_id: "txn-3",
    product: "Bricks",
    vendor: "Jenish Brick House",
    quantity: 610,
    price: 10000,
    status: "completed",
  },
]
