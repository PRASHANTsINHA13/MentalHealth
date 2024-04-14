"use client";
import { ibmPlex } from "@/ui/fonts";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";
import { loginSchema } from "@/app/actions/login/models";
import { toast } from "sonner";
import { ErrorResponse } from "@/app/actions/login/types";

function LoginForm({
  action,
}: {
  action: (
    prevState: undefined,
    formData: FormData
  ) => Promise<ErrorResponse | undefined>;
}) {
  const [formState, formAction] = useFormState(action, undefined);
  useEffect(() => {
    if (formState?.type === "error") {
      toast.error(formState.message);
    }
  }, [formState]);

  async function onFormSubmit(formData: FormData) {
    const parsedResult = loginSchema.safeParse(Object.fromEntries(formData));
    if (parsedResult.success) {
      formAction(formData);
    } else {
      const flattendError = parsedResult.error.flatten().fieldErrors;
      if (flattendError.email) {
        toast.error(`email ${flattendError.email[0]}`);
      }

      if (flattendError.password) {
        toast.error(`password ${flattendError.password[0]}`);
      }
    }
  }
  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1
        className={`${ibmPlex.className} mb-6 text-4xl font-semibold  bg-gradient-to-r from-primary  to-secondary inline-block text-transparent bg-clip-text`}
      >
        Mental health care bot
      </h1>
      <section className="w-full bg-base-300 border-base-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login to your account
          </h2>
          <form className="space-y-4 md:space-y-6" action={onFormSubmit}>
            <fieldset>
              <label htmlFor="email" className="label-text">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered input-primary w-full"
                placeholder="Your email"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password" className="label-text">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="input input-bordered input-primary w-full"
                required
                minLength={4}
                maxLength={8}
              />
            </fieldset>

            <SubmitButton />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 space-x-2">
              <span>Don't have an account?</span>
              <Link href="/signup" replace className="link link-primary">
                Signup here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginForm;
