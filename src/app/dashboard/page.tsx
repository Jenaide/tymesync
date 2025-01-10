import { requireUser } from "@/lib/hooks";

export default async function DashboardHome(){
    const session = await requireUser();
   
    return (
        <div>
            <h1>welcome {session.user?.name}</h1>
        </div>
    )
}