"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginformSchema, LoginFormValues } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import AuthHeader from "./auth-header";
import { Label } from "@/components/ui/label";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: LoginFormValues) {
    startTransition(() => {
      console.log(values);
    });
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center rounded-xl">
      <AuthHeader
        title1="Hello"
        title2="Welcome"
        desc="Please enter your credentials to continue"
      />

      {/* Form */}
      <div className="bg-[#FDE8E9] w-full px-4 lg:pt-5 sm:px-6 md:px-8 mt-8 rounded-[8px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full py-6 space-y-6"
          >
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-800"
                  >
                    Email
                  </Label>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-500" />
                      </div>
                      <Input
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 h-[50px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs mt-1 text-red-500" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-800"
                  >
                    Password
                  </Label>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your Password"
                        className="w-full pl-12 pr-10 py-3  h-[50px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs mt-1 text-red-500" />
                </FormItem>
              )}
            />

            {/* Sign In Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-[50px] text-base font-semibold rounded-lg   bg-primary text-white hover:bg-primary/90"
                disabled={isPending}
              >
                {isPending ? "Signing In..." : "Sign In"}
              </Button>
            </div>

            {/* Sign Up Link (optional) */}
            {/* <div className="text-center text-sm mt-4">
          <span className="text-gray-700">New to our platform?</span>{" "}
          <Link
            href="/signup"
            className="text-black font-medium hover:underline"
          >
            Sign Up Here
          </Link>
        </div> */}
          </form>
        </Form>
      </div>
    </div>
  );
}
