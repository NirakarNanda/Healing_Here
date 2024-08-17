"use client";
import React, { useEffect, useState } from 'react'
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please provide a valid email address"),
  password: z.string()
    .regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d.*\d.*\d).{8,}$/, "Password should contain atleast one uppercase letter , one special charecter and password should be atleast 8 charecters long")
    .min(1, "Password is required"),
});

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const form = useForm<Inputs>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });
  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    setLoading(true)
    try {
      const response = await axios.post("/api/login", user);
      if (response.data.success) {
        router.push('/dashboard');
      }
      toast.success('Login successfully', { style: { color: "white", background: '#333' } });
    } catch (error: any) {
      toast.error(error.message, { style: { color: "white", background: '#333' } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='w-screen h-screen flex justify-center items-center bg-[#FBFCF8]'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-1/3 p-10 flex flex-col gap-7 border shadow-xl'>
        <h1 className='text-3xl font-bold text-center text-[#516EFF]'>Login</h1>

        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email</label>
          <input className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
            type="email" id="email" required
            {...register("email")}
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password">Password</label>
          <input className='px-4 py-2 rounded-lg border-2 focus:border-[#516EFF] outline-none'
            type="password" id="password" required
            {...register("password")}
          />
          {errors.password && (
            <p className='text-sm text-red-500'>{errors.password.message}</p>
          )}
        </div>

        <button className='text-start hover:text-[#516EFF]'>Forgot Password</button>
        <button className='w-full bg-[#516EFF] text-white rounded py-2 hover:bg-[#4353B3] transition-colors'>Login</button>
      </form>
    </main>
  )
}

export default Login