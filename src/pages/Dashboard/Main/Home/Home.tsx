import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDashboardStats, mockTodayTransactions } from "@/mocks/stats_mocks"
import {
  AlertTriangle,
  FileText,
  Package,
  TrendingDown,
  Users,
} from "lucide-react"

const Home = () => {
  const stats = [
    {
      label: "Inventory Value",
      value: `₹${mockDashboardStats.inventory_value.toLocaleString()}`,
      icon: Package,
      color: "text-primary",
    },
    {
      label: "Today's Transactions",
      value: mockDashboardStats.transactions_today,
      icon: TrendingDown,
      color: "text-accent",
    },
    {
      label: "Pending Invoicing",
      value: `₹${mockDashboardStats.pending_invoicing.toLocaleString()}`,
      icon: FileText,
      color: "text-warning",
    },
    {
      label: "Outstanding Balance",
      value: `₹${mockDashboardStats.outstanding_balance.toLocaleString()}`,
      icon: Users,
      color: "text-destructive",
    },
  ]

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">
          Overview of your inventory and billing operations
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</span>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">
              Today's Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockTodayTransactions.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No transactions today
              </p>
            ) : (
              <div className="space-y-3">
                {mockTodayTransactions.map((txn) => (
                  <div
                    key={txn.transaction_id}
                    className="flex items-center justify-between border-b py-2 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {txn.product || "Unknown"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {txn.vendor} • Qty: {txn.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        ₹{txn.price.toLocaleString()}
                      </p>
                      <Badge
                        variant={
                          txn.status === "pending" ? "secondary" : "default"
                        }
                        className="text-[10px]"
                      >
                        {txn.status === "pending" ? "Pending" : "completed"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <AlertTriangle className="text-warning h-4 w-4" />
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="py-4 text-center text-sm text-muted-foreground">
              All stock levels are healthy
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
