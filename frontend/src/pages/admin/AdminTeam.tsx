import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import api from "@/services/api";
import TeamMemberForm from "@/components/admin/TeamMemberForm";

const AdminTeam = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const { data: team, isLoading } = useQuery({
        queryKey: ["admin-team"],
        queryFn: async () => {
            const { data } = await api.get("/team");
            return data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            await api.post("/team", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-team"] });
            toast({ title: "Success", description: "Team member added successfully" });
            setIsDialogOpen(false);
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: any }) => {
            await api.put(`/team/${id}`, data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-team"] });
            toast({ title: "Success", description: "Team member updated successfully" });
            setIsDialogOpen(false);
            setEditingMember(null);
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/team/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-team"] });
            toast({ title: "Success", description: "Team member removed successfully" });
        },
    });

    const handleSubmit = (data: any) => {
        if (editingMember) {
            updateMutation.mutate({ id: editingMember._id, data });
        } else {
            createMutation.mutate(data);
        }
    };

    const filteredTeam = team?.filter((member: any) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Manage Team</h1>
                <Button onClick={() => { setEditingMember(null); setIsDialogOpen(true); }}>
                    <Plus className="mr-2 h-4 w-4" /> Add Member
                </Button>
            </div>

            <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search by name or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Order</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredTeam?.map((member: any) => (
                            <TableRow key={member._id}>
                                <TableCell>
                                    {member.image ? (
                                        <img
                                            src={member.image.startsWith("http") ? member.image : `${import.meta.env.VITE_BACKEND_URL}${member.image}`}
                                            alt={member.name}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                            <span className="text-xs">{member.name.charAt(0)}</span>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell className="font-medium">{member.name}</TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell>{member.order}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                setEditingMember(member);
                                                setIsDialogOpen(true);
                                            }}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => {
                                                if (confirm("Are you sure?")) {
                                                    deleteMutation.mutate(member._id);
                                                }
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingMember ? "Edit Team Member" : "Add New Team Member"}</DialogTitle>
                    </DialogHeader>
                    <TeamMemberForm
                        initialData={editingMember}
                        onSubmit={handleSubmit}
                        isLoading={createMutation.isPending || updateMutation.isPending}
                        onCancel={() => setIsDialogOpen(false)}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminTeam;
