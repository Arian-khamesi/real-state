"use client";

import { signOut } from "next-auth/react";
import styles from "./LogoutButton.module.css"
import { FiLogOut } from "react-icons/fi"
import { useRouter } from "next/navigation";

function LogoutButton() {

  const router = useRouter();

  const signoutHandler = async () => {
    await signOut()
    router.push("/");

  }

  return (
    <button className={styles.button} onClick={signoutHandler}>
      <FiLogOut />
      خروج
    </button>
  )
}

export default LogoutButton