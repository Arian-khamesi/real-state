"use client"

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "./Header.module.css"
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession()
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/"  className="title">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential" className="title">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header