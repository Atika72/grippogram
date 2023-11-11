import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { SignupValidaton } from "../../lib/validation";
import Loader from "../../components/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "../../lib/appwrite/api";

const SignupForm = () => {
  const isLoading = false;

  const form = useForm<z.infer<typeof SignupValidaton>>({
    resolver: zodResolver(SignupValidaton),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof SignupValidaton>) {
    const newUser = await createUserAccount(values);

    console.log(newUser);
  }
  return (
    <Form {...form}>
      <div className="sm:w-[420] flex-col justify-center items-center flex">
        <div className="flex flex-row items-center justify-center ">
          <img
            className="w-8 font-bold"
            src="../../../public/assets/images/logo.svg"
            alt=""
          />
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3D7AFE] to-[#c471ed] "></h3>
        </div>
        <h2 className="text-slate-700 text-xl pt-5 md:font-bold items-center leading-[140%] tracking-tight">
          Create a new Account
        </h2>
        <p className="text-slate-400 font-medium mt-2 text-xs md:leading-[140%] tracking-wide">
          To use Gippogram, please enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full mt-2 gap-1 items-center"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-slate-500 ">
                <FormLabel className="text-[14px]">Name</FormLabel>
                <FormControl>
                  <Input type="name" className="w-80" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="text-slate-500 ">
                <FormLabel className="text-[14px]">Userame</FormLabel>
                <FormControl>
                  <Input type="username" className="w-80 " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-slate-500 ">
                <FormLabel className="text-[14px]">Email</FormLabel>
                <FormControl>
                  <Input type="email" className="w-80" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-slate-500 ">
                <FormLabel className="text-[14px]">Password</FormLabel>
                <FormControl>
                  <Input type="password" className="w-80" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="text-white mt-4 bg-[#7E57C2] hover:bg-[#604294] font-bold py-2 px-4 rounded w-80"
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <Loader />
                Loading....
              </div>
            ) : (
              "Sign up"
            )}
          </Button>

          <p className="text-slate-500 text-xs">
            Already have an account?
            <Link to="/sign-in"> Login</Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
