export interface DashboardStats {
  inventory_value: number;
  transactions_today: number;
  pending_invoicing: number;
  outstanding_balance: number;
}

export interface DashboardTransactions {
  transaction_id: string;
  product: string;
  vendor: string;
  quantity: number;
  price: number;
  status: "pending" | "completed"
}