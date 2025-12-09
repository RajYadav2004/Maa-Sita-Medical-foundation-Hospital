import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, Activity } from "lucide-react";
import api from "@/services/api";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";

// The Stats interface is no longer directly used for state, but the structure is similar
// interface Stats {
//   doctors: number;
//   services: number;
//   blogPosts: number;
//   appointments: number;
// }

const AdminDashboard = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [doctors, appointments, posts, services] = await Promise.all([
        api.get("/doctors"),
        api.get("/appointments"),
        api.get("/blog"),
        api.get("/services"),
      ]);

      return {
        doctors: doctors.data.length,
        appointments: appointments.data.length,
        posts: posts.data.length,
        services: services.data.length,
      };
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? '...' : stats?.doctors || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? '...' : stats?.appointments || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? '...' : stats?.posts || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? '...' : stats?.services || 0}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
              <Link to="/admin/users">
                <Users className="h-6 w-6" />
                Manage Users
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
              <Link to="/admin/services">
                <Activity className="h-6 w-6" />
                Manage Services
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
              <Link to="/admin/blog">
                <FileText className="h-6 w-6" />
                Manage Blog
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
              <Link to="/admin/appointments">
                <Calendar className="h-6 w-6" />
                View Appointments
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <AdminAnalytics />
    </div>
  );
}

export default AdminDashboard;
