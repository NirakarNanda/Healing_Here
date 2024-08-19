import appointmentModel from "@/src/model/appointment.model";
import { NextResponse } from "next/server";
import { sendMail } from "@/src/helper/AppointmentMail";
import connectDB from "@/src/database/dbConfig";
import { BsBodyText } from "react-icons/bs";

export async function POST(request: Request) {
    await connectDB();

    try {
        const { info: body } = await request.json();
        if (!body) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
        }

        const response = await appointmentModel.create({
            name: body.name, 
            phone: body.phone, 
            date: body.date, 
            services: body.services, 
            problem: body.problem, 
            message: body.message, 
            policy: body.policy, 
            email: body.email
        });

        const emailResponse = await sendMail({ 
            name: body.name, 
            phone: body.phone, 
            date: body.date, 
            services: body.services, 
            problem: body.problem, 
            message: body.message, 
            policy: body.policy, 
            email: body.email
        });

        console.log(emailResponse);
        return NextResponse.json({
            success: true,
            message: "Appointment booked successfully",
            data: response
        });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ 
            success: false,
            error: error, 
            message: "Something went wrong" 
        }, { status: 500 });
    }
}