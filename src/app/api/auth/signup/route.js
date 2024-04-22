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
                { error: "plz enter correct data and complete fillds" },
                { status: 422 }
            )
        }


        const existingUser = await User.findOne({ email })
        console.log(existingUser);

        if (existingUser) {
            return NextResponse.json(
                { error: "user exist" },
                { status: 422 }
            )
        }


        const hashedPassword = hashPassword(password)

        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
        })
        console.log(newUser);

        return NextResponse.json(
            { message: "User successfully created" },
            { status: 200 }
        )
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "some things wrong in server" },
            { status: 500 }
        )
    }
}