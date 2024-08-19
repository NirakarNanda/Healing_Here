import connectDB from "@/src/database/dbConfig";
import UserModel from "@/src/model/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // check if user exist
        const user = await UserModel.findOne({email});
        if (!user) {
            return Response.json({ success: false, message: "User doesn't exist" }, { status: 400 })
        }

        // check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return Response.json({ success: false, message: "Incorrect password" }, { status: 400 })   
        }

        // create token
        const tokenData = {
            id: user._id,
            email: user.email
        }
        // create token 
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" });

        const response = NextResponse.json({
            success: true,
            message: "Login successfully"
        })
        response.cookies.set("token", token, { httpOnly: false });

        return response;
    } 
    catch (error: any) {
        console.log('Internal error, please try again.', error);
        return Response.json({error: error.message}, {status: 500})
    }
}