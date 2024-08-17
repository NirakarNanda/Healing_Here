"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";

export const ContactSection = () => {
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className='px-4 sm:px-12 py-16'>
            <h2 className='sm:pt-12 text-3xl sm:text-3xl md:text-4xl font-semibold text-center text-[#516EFF]'>
                MAKE AN
                <span className='text-[#FFD700]'> APPOINTMENT</span>
            </h2>
            <h3 className='pt-4 pb-8 sm:pt-8 sm:pb-16 text-xl sm:text-3xl md:text-4xl text-center text-[#516EFF]'>
                Consult with your <span className='font-bold'> Physiotherapist</span>
            </h3>
            <div className='grid grid-cols-1 gap-8 place-items-center sm:gap-0 md:grid-cols-2'>
                <Image
                    src={"/assets/contact.png"}
                    alt='contact image'
                    width={500}
                    height={100}
                    objectFit='contain'
                />

                {/* Form */}
                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="name">Name</label>
                            <input
                                className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                                type="text"
                                name='name'
                                id='name'
                                placeholder='Full Name'
                                required
                            />
                        </div>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="phone">Phone</label>
                            <input
                                className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                                type="text"
                                name='phone'
                                id='phone'
                                placeholder='9927367923'
                                required
                            />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="date">Date</label>
                            <input
                                className='w-full px-4 py-2 rounded-lg border-2 text-gray-400 focus:border-[#516EFF] outline-none'
                                type="date"
                                name='date'
                                id='date'
                                required
                            />
                        </div>
                        <div className='flex flex-1 flex-col'>
                            <label htmlFor="problem">Problem</label>
                            <select
                                className='w-full px-4 py-2.5 rounded-lg border-2 text-gray-400 focus:border-[#516EFF] outline-none'
                                name="problem"
                                id="problem"
                                required
                            >
                                <option value="backpain">Back Pain</option>
                                <option value="shoulderpain">Shoulder Pain</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 md:gap-10'>
                        <label htmlFor="uploads" className='flex items-center gap-3'>
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
                                    layout='fill'       // Fills the container
                                    className='object-cover'
                                />
                            </div>
                            
                            )}
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea
                            className='w-full px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
                            name="message"
                            id="message"
                            rows={5}
                            placeholder='Include a message...'
                        ></textarea>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input
                            className='w-5 h-5 border-2 rounded-xl'
                            type="checkbox"
                            name="policy"
                            id="policy"
                        />
                        <p className='text-[#52525B]'>You agree to our friendly privacy policy.</p>
                    </div>
                    <button className='bg-[#516EFF] text-white px-6 py-3 rounded-lg'>Confirm Appointment</button>
                </form>
            </div>
        </section>
    );
};
