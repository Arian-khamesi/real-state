import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "../layout/DashboardSidebar.module.css"
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";


async function DashboardSidebar({ children }) {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <CgProfile />
                <p>{session ? session.user.email : null}</p>
                <span></span>
                <Link href="/dashboard">حساب کاربری</Link>
                <Link href="/dashboard/my-profiles">آگهی های من</Link>
                <Link href="/dashboard/add">ثبت آگهی</Link>
                <LogoutButton />
            </div>
            <div className={styles.main}>{children}</div>
        </div>
    )
}

export default DashboardSidebar