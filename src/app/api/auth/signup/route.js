import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import User from "src/models/Users";

export async function POST(req) {
    try {
        await connectDB()

        const { userName, email, password } = await req.json()
        console.log(userName, email, password);


        if (!userName || !email || !password) {
            return NextResponse.json(
                { error: "لطفا اطلاعات صحیح را وارد کرده و تمامی فیلد ها را تکمیل کنید" },
                { status: 422 }
            )
        }


        const existingUser = await User.findOne({ email })
        console.log(existingUser);

        if (existingUser) {
            return NextResponse.json(
                { error: "کاربری با این اطلاعات قبلا ثبت نام کرده است" },
                { status: 422 }
            )
        }


        const hashedPassword = await hashPassword(password)

        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
        })
        console.log(newUser);

        return NextResponse.json(
            { message: "کاربر با موفقیت ثبت نام شد" },
            { status: 201 }
        )
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "مشکلی در سرور پیش آمده است" },
            { status: 500 }
        )
    }
}