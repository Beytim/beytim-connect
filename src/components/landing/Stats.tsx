import { TrendingUp, Users, Package, Star } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "156K",
    label: "Monthly Revenue",
    suffix: "ETB",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "245",
    label: "Order Volume",
    color: "text-secondary",
  },
  {
    icon: Users,
    value: "89",
    label: "Active Users",
    color: "text-success",
  },
  {
    icon: Star,
    value: "4.7",
    label: "Satisfaction",
    suffix: "/5",
    color: "text-secondary",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                {stat.value}{stat.suffix && <span className="text-xl ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
