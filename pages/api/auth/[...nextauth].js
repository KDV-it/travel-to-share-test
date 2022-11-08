import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google" 
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectMongo from "../../../database/conn"
import Users from "../../../model/Schema"
import { compare } from "bcryptjs"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET  
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(error => {error: "Connection Fail!"})

        //check user existance
        const result = await Users.findOne({email: credentials.email})
        if(!result) {
          throw new Error("No user found with Email. Please Sign Up!");
        }

        //compare()
        const checkPassword = await compare(credentials.password, result.password)

        //check correct
        if(!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password does not Match!")
        }

        return result;

      }
    })
  ],
  secret: process.env.JWT_SECRET
})
