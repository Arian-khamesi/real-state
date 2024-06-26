"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../module/Loader";
import styles from "./SignupPage.module.css";
import { hashPassword } from "@/utils/auth";

function SignupPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const signupHandler = async (e) => {
        e.preventDefault();
        console.log({ userName, email, password });
        if (password !== rePassword) {
            toast.error("رمز و تکرار آن برابر نیست");
            return;
        }
        setLoading(true);
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ userName, email, password }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setLoading(false);
        if (res.status === 201) {
            toast.success("ثبت نام شما با موفقیت انجام شد")
            router.push("/signin");
        } else {
            toast.error(data.error);
        }
    };

    return (
        <div className={styles.form}>
            <h4>فرم ثبت نام</h4>
            <form className={styles.form_up}>
                <label>نام کاربری:</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>ایمیل:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>رمز عبور:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>تکرار رمز عبور:</label>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
                {loading ? (
                    <Loader />
                ) : (
                    <button type="submit" onClick={signupHandler}>
                        ثبت نام
                    </button>
                )}
            </form>
            <p>
                حساب کاربری دارید؟
                <Link href="/signin">ورود</Link>
            </p>
            <Toaster />
        </div>
    );
}

export default SignupPage;