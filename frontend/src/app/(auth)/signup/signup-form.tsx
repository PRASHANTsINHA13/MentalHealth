"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { ibmPlex } from "@/ui/fonts";
import Link from "next/link";
import { toast } from "sonner";
import SubmitButton from "./submit-button";
import { ServerActionResponse } from "@/app/actions/register-user/types";
import { formSchema } from "@/app/actions/register-user/models";

function Form(props: {
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<ServerActionResponse | undefined>;
}) {
  const { action } = props;
  const [state, formAction] = useFormState(action, undefined);
  useEffect(() => {
    if (state?.type == "error") {
      toast.error(state.message, {});
    }
  }, [state]);

  async function onFormSubmit(formData: FormData) {
    const parsedResult = formSchema.safeParse(Object.fromEntries(formData));
    if (parsedResult.success) {
      formAction(formData);
    } else {
      const flattendError = parsedResult.error.flatten().fieldErrors;
      if (flattendError.email) {
        toast.error(`email ${flattendError.email[0]}`);
      }
      if (flattendError.name) {
        toast.error(`name ${flattendError.name[0]}`);
      }
      if (flattendError.password) {
        toast.error(`password ${flattendError.password[0]}`);
      }
    }
  }

  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1
        className={`${ibmPlex.className} mb-6 text-3xl text-center font-semibold  bg-gradient-to-r from-primary w-1/2  to-secondary inline-block text-transparent bg-clip-text`}
      >
        Ai mental health chatbot using deep neural network
      </h1>
      <section className="w-full bg-base-300 border-base-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h2>
          <form className="space-y-4 md:space-y-6" action={onFormSubmit}>
            <fieldset>
              <label htmlFor="name" className="label-text">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered input-primary w-full"
                placeholder="Your name"
                required
              />
            </fieldset>

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
                placeholder="Your password "
                className="input input-bordered input-primary w-full valid:"
                required
                minLength={4}
                maxLength={8}
              />
            </fieldset>

            <SubmitButton />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 space-x-2">
              <span>Already have an account?</span>
              <Link href="/login" replace className="link link-primary">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Form;
