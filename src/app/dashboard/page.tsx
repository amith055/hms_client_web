import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Bed, Utensils, CheckCircle } from 'lucide-react';

const analyticsData = [
  {
    title: 'Total Students',
    value: '142',
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
    change: '+5 since last month',
  },
  {
    title: 'Occupancy',
    value: '95%',
    icon: <Bed className="h-4 w-4 text-muted-foreground" />,
    change: '7 beds available',
  },
  {
    title: 'Attendance Today',
    value: '138',
    icon: <CheckCircle className="h-4 w-4 text-muted-foreground" />,
    change: '4 students on leave',
  },
  {
    title: 'Meals Served Today',
    value: '414',
    icon: <Utensils className="h-4 w-4 text-muted-foreground" />,
    change: 'Breakfast, Lunch, Dinner',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight font-headline">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">{item.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent>
                <p>No recent announcements.</p>
            </CardContent>
        </Card>
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Upcoming Leaves</CardTitle>
            </CardHeader>
            <CardContent>
                <p>No upcoming leave requests.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
