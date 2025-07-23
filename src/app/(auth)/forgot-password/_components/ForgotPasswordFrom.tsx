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
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import AuthHeader from "../../login/_components/auth-header";
import { Mail } from "lucide-react";

// Define email schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: ForgotPasswordFormValues) => {
    startTransition(() => {
      
      console.log(values.email);
      // Handle OTP sending logic here
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl flex flex-col items-center">
        <AuthHeader
          title1="Forgot"
          title2="Password"
          desc="Enter the email address associated with your account. We'll send you an OTP to your email. "
        />

        <div className="bg-[#FDE8E9] w-full max-w-xl mx-auto mt-8 px-6 pt-6 pb-5 rounded-xl border border-red-200 shadow-sm">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-5"
            >
              <div className="space-y-2">
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
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Mail className="w-5 h-5 text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                            className="w-full h-[48px] pl-10 pr-4 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-400 rounded-md text-sm text-gray-700 placeholder:text-gray-400 transition-all duration-200"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-3">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-[51px] rounded-md transition-colors duration-200"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send OTP"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
