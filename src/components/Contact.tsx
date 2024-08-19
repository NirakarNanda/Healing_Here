"use client";
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoCloudUploadOutline } from "react-icons/io5";

interface ContactSectionprops {
    id?: string;
}

type Inputs = {
    name: string;
    phone: number | null;
    date: Date | null;
    services: string;
    problem: string;
    message: string;
    policy: boolean
};

export const ContactSection: React.FC<ContactSectionprops> = ({ id }) => {
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    const form = useForm({
        defaultValues: {
            name: "", phone: null, email: '', date: null, services: '', problem: '', message: '', policy: false
        },
    });
    const { register, handleSubmit, formState: { errors } } = form;


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
        const info: any = { ...data, preview }
        try {
            const response = await axios.post('/api/bookAppointment', { info });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section id={id} className='px-4 sm:px-12 py-16'>
            <h2 className='sm:pt-12 text-3xl sm:text-3xl md:text-4xl font-semibold text-center text-[#516EFF]'>
                MAKE AN
                <span className='text-[#FFD700]'> APPOINTMENT</span>
            </h2>
            <h3 className='pt-4 pb-8 sm:pt-8 sm:pb-16 text-xl sm:text-3xl md:text-4xl text-center text-[#516EFF]'>
                Consult with your <span className='font-bold'> Physiotherapist</span>
            </h3>
            <div className='grid grid-cols-1 gap-8 place-items-center sm:gap-0 md:grid-cols-2'>
                <Image
                    src="/assets/fun.png"
                    alt='contact image'
                    width={500}
                    height={100}
                    priority={false}
                    className='object-contain'
                />

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="name">Name</label>
                            <input
                                className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                                type="text"
                                id='name'
                                placeholder='Full Name'
                                required
                                {...register("name")}
                            />
                        </div>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="phone">Phone</label>
                            <input
                                className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                                type="text"
                                id='phone'
                                placeholder='9927367923'
                                required
                                {...register("phone")}
                            />
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <label htmlFor="phone">Email</label>
                        <input
                            className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                            type="email"
                            id='email'
                            placeholder='example@gmail.com'
                            required
                            {...register("email")}
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="date">Date</label>
                            <input
                                className='w-full px-4 py-2 rounded-lg border-2 text-gray-600 focus:border-[#516EFF] outline-none'
                                type="date"
                                id='date'
                                required
                                {...register("date")}
                            />
                        </div>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="Services">Services</label>
                            <select
                                className='w-full px-4 py-2.5 rounded-lg border-2 text-gray-600 focus:border-[#516EFF] outline-none'
                                id="Services"
                                required
                                {...register("services")}
                            >
                                <option value="homevisit">Home Visit</option>
                                <option value="onlineconsultation">Online Consultation</option>
                                <option value="visitClinic">Visit Clinic</option>


                            </select>
                        </div>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="problem">Problem</label>
                            <select
                                className='w-full px-4 py-2.5 rounded-lg border-2 text-gray-600 focus:border-[#516EFF] outline-none'
                                id="problem"
                                required
                                {...register("problem")}
                            >
                                <option value="neckpain">Neck Pain</option>
                                <option value="kneeinjury">Knee Injury</option>
                                <option value="hippain">Hip Pain</option>
                                <option value="elbowpain">Elbow Pain</option>
                                <option value="wristinjury">Wrist Injury</option>
                                <option value="anklepain">Ankle Pain</option>
                                <option value="sportsinjury">Sports Injury</option>
                                <option value="posturecorrection">Posture Correction</option>
                                <option value="rehabilitation">Rehabilitation</option>
                                <option value="musclestrain">Muscle Strain</option>

                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 md:gap-10'>
                        <label htmlFor="uploads" className='flex items-center gap-3 hover:cursor-pointer'>
                            <span>Upload Your Photo</span>
                            <IoCloudUploadOutline className='text-black text-4xl border-2 rounded-lg p-1' />
                            <input
                                type="file"
                                name="uploads"
                                id="uploads"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            {preview && (
                                <div className='relative w-[80px] h-[80px] overflow-hidden rounded-full'>
                                    <Image
                                        src={preview as string}
                                        alt='Preview'
                                        width={80}
                                        height={80}
                                        className='object-cover'
                                        layout="intrinsic"
                                    />
                                </div>

                            )}
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea
                            className='w-full px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                            id="message"
                            rows={5}
                            placeholder='Include a message...'
                            {...register("message")}
                        ></textarea>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input
                            className='w-5 h-5 border-2 rounded-xl'
                            type="checkbox"
                            id="policy"
                            {...register("policy")}
                        />
                        <p className='text-[#52525B]'>You agree to our friendly privacy policy.</p>
                    </div>
                    <button className='bg-[#516EFF] text-white px-6 py-3 rounded-lg'>Confirm Appointment</button>
                </form>
            </div>
        </section>
    );
};
