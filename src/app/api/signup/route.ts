import connectDB from "@/database/dbConfig";
import UserModel from "@/model/user.model";
import bcryptjs from "bcryptjs";

export async function POST(request: Request) {
    await connectDB();

    try {
        const { email, password } = await request.json();

        // check if the user is already  exist
        const existingUserByEmail = await UserModel.findOne({email});
        if (existingUserByEmail) {
            return Response.json({ success: false, message: 'User already exist' }, { status: 400 })
        }
        else {   
            // hash password
            const hashedPassword = await bcryptjs.hash(password, 10);
            const newUser = await UserModel.create({ email, password: hashedPassword });

            return Response.json({
                success: true,
                message: "User registered successfully",
                data: newUser
            })
        }
    } 
    catch (error: any) {
        console.log('Error registering user', error.message);
        return Response.json({error: error.message}, {status: 500})
    }
}