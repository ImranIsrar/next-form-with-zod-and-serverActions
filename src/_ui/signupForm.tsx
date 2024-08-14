"use client";
import { signup } from "@/_actions/auth";
import { ZodErrors } from "@/_components/zodErrors";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function SignupForm() {
  const INITIAL_STATE = {
    response: false,
    data: null,
    error: null,
  };

  const [formState, formAction] = useFormState(signup, INITIAL_STATE);
  console.log(formState, "client");

  return (
    <>
      <div className="mx-auto w-full max-w-[1280px] py-[50px]">
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Name"
              className="border border-solid py-3 px-4 rounded-[4px] w-full"
            />
            <ZodErrors error={formState?.error?.name} />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              className="border border-solid py-3 px-4 rounded-[4px] w-full"
            />
            <ZodErrors error={formState?.error?.email} />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="border border-solid py-3 px-4 rounded-[4px] w-full"
            />
            <ZodErrors error={formState?.error?.password} />
          </div>
          <div>
            <SubmitButton />
          </div>
        </form>
      </div>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-green-500 text-white p-4 rounded-[4px]"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
