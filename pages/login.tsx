import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { signIn, error, loading } = useAuth();
  console.log("loading>>", loading);

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await signIn(email, password);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
        alt=""
      />

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt="logo"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full" htmlFor="Email">
            <input
              type="email"
              placeholder="email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email
              </span>
            )}
          </label>
          <label className="inline-block w-full" htmlFor="Password">
            <input
              type="password"
              placeholder="password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="p-1 text-[13px] font-light text-orange-500">
                Password must be between 4 and 40 characters
              </span>
            )}
          </label>
        </div>
        {!loading ? (
          <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
            Sign in
          </button>
        ) : (
          <div className="flex items-center justify-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && <span>{error}</span>}
        <div className="space-x-2">
          <span>New to Netflix?</span>
          <Link href="/signup">
            <button type="submit" className="text-white hover:underline">
              Sign up now
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
