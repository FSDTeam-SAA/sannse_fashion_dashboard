import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "$51,250",
    change: "10%",
    period: "last 100 today",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Total Order",
    value: "51,250",
    change: "10%",
    period: "last 100 today",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Total Customers",
    value: "2550",
    change: "10%",
    period: "last 100 today",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Total Products",
    value: "2550",
    change: "10%",
    period: "last 100 today",
    icon: Package,
    color: "text-orange-600",
  },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {metric.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-500">
                      {metric.period}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCard;
