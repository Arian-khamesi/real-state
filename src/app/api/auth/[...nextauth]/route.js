import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "src/models/Users";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [CredentialsProvider({
        async authorize(credentials) {
            const { email, password } = credentials

            try {
                await connectDB()
            } catch (err) {
                throw new Error("smth wrong in server")
            }

            if (!email || !password)
                throw new Error("plz enter correct and valid infos")


            const user = User.findOne({ email })

            if (!user)
                throw new Error("plz signup first")

            const isValid = await verifyPassword(password, user.password)

            if (!isValid)
                throw new Error("email or password is incorrect")

            return { email }
        }

    })]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }