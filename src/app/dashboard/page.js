import connectDB from "@/utils/connectDB";
import DashboardPage from "@/template//DashboardPage"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import User from "src/models/Users";


async function Dashboard() {

    await connectDB()
    const session = await getServerSession(authOptions);
    const user = await User.findOne({ email: session?.user.email })
    console.log(user);

    return (
        <DashboardPage createdAt={user.createdAt} />
    )
}


export default Dashboard