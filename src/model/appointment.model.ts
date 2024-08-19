import mongoose, { Schema, Document } from "mongoose";

export interface Appointment extends Document {
    name: string,
    phone: number,
    email: string,
    date: Date,
    services: string,
    problem: string,
    message?: string,
    policy: boolean
}

const apppointmentSchema: Schema<Appointment> = new Schema({
    name: { type: String, required: [true, "Name is required"], },
    email: { type: String, required: [true, "Email is required"], },
    phone: { type: Number, required: [true, "Phone number is required"], },
    date: { type: Date, required: [true, "Date is required"], },
    services: { type: String, required: [true, "Services is required"], },
    problem: { type: String, required: [true, "Problem is required"], },
    message: { type: String },
    policy: { type: Boolean, required: [true, "Policy is required"], }
},
    { timestamps: true }
)

const appointmentModel = mongoose.models.Appointment as mongoose.Model<Appointment> ||
    mongoose.model<Appointment>('appointment', apppointmentSchema);

export default appointmentModel;