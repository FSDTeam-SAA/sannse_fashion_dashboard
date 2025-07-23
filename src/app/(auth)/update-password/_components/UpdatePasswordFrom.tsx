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

// Define password schema
const updatePasswordSchema = z
  .object({
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;

export default function UpdatePasswordForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (values: UpdatePasswordFormValues) => {
    startTransition(() => {
      console.log("New Password:", values.newPassword, "Confirm Password:", values.confirmPassword);
      // Handle password update logic here
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl flex flex-col items-center">
        <AuthHeader
          title1="Update"
          title2="Password"
          desc="Create your new password"
        />

        <div className="w-full bg-[#FDE8E9] pt-8 pb-6 px-6 rounded-[8px] mt-8">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="newPassword" className="text-black">
                      New Password
                    </Label>
                    <FormControl>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="Enter your New Password"
                        {...field}
                        className="w-full bg-pink-50 h-[51px] border-pink-200 text-gray-700 placeholder-gray-400"
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="confirmPassword" className="text-black">
                      Confirm Password
                    </Label>
                    <FormControl>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Enter your Confirm Password"
                        {...field}
                        className="w-full bg-pink-50 h-[50px] border-pink-200 text-gray-700 placeholder-gray-400"
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full h-[51px] bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-md"
              disabled={isPending}
            >
              Continue
            </Button>
          </form>
        </Form>
        </div>
      </div>
    </div>
  );
}
