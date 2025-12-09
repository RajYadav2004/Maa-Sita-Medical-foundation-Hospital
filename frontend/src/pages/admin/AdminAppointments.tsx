import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import api from "@/services/api";

const AdminAppointments = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: appointments, isLoading } = useQuery({
        queryKey: ["admin-appointments"],
        queryFn: async () => {
            const { data } = await api.get("/appointments");
            return data;
        },
    });

    const updateStatusMutation = useMutation({
        mutationFn: async ({ id, status }: { id: string; status: string }) => {
            await api.put(`/appointments/${id}`, { status });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-appointments"] });
            toast({
                title: "Success",
                description: "Appointment status updated",
            });
        },
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Manage Appointments</h1>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {appointments?.map((apt: any) => (
                            <TableRow key={apt._id}>
                                <TableCell>
                                    <div className="font-medium">{apt.patient_name}</div>
                                    <div className="text-xs text-muted-foreground">{apt.phone}</div>
                                </TableCell>
                                <TableCell>{apt.preferred_date}</TableCell>
                                <TableCell>{apt.preferred_time}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            apt.status === "confirmed"
                                                ? "default"
                                                : apt.status === "cancelled"
                                                    ? "destructive"
                                                    : "secondary"
                                        }
                                    >
                                        {apt.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        {apt.status === "pending" && (
                                            <>
                                                <Button
                                                    size="sm"
                                                    onClick={() =>
                                                        updateStatusMutation.mutate({ id: apt._id, status: "confirmed" })
                                                    }
                                                >
                                                    Confirm
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() =>
                                                        updateStatusMutation.mutate({ id: apt._id, status: "cancelled" })
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminAppointments;
