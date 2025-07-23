"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AuthHeader from "../../login/_components/auth-header";

// Define OTP schema
const otpSchema = z.object({
  otp1: z.string().length(1).regex(/^\d$/),
  otp2: z.string().length(1).regex(/^\d$/),
  otp3: z.string().length(1).regex(/^\d$/),
  otp4: z.string().length(1).regex(/^\d$/),
  otp5: z.string().length(1).regex(/^\d$/),
});

type OtpFormValues = z.infer<typeof otpSchema>;

export default function OtpForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const fieldName = `otp${index + 1}` as keyof OtpFormValues;
      form.setValue(fieldName, value);

      // Move focus to next input
      if (value && index < 4) {
        const nextInput = document.getElementById(
          `otp-${index + 1}`
        ) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    setIsPending(true);
    setTimeout(() => {
      form.reset();
      setIsPending(false);
    }, 500); // simulate resend delay
  };

  const onSubmit = (values: OtpFormValues) => {
    setIsPending(true);
    setTimeout(() => {
      console.log("Submitted OTP:", values);
      // TODO: Implement your actual OTP verification logic here
      setIsPending(false);
    }, 500); // simulate verification delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl flex flex-col items-center">
        <AuthHeader
          title1="Verify"
          title2="OTP"
          desc="Enter the email address associated with your account. We'll send you an OTP to your email. "
        />

        <div className="w-full bg-[#FDE8E9] p-6 rounded-[8px] mt-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-5"
            >
              <div className="flex justify-between space-x-2 mb-6 p-4 rounded-md">
                {Array.from({ length: 5 }, (_, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={`otp${index + 1}` as keyof OtpFormValues}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={field.value}
                            onChange={(e) => handleChange(e, index)}
                            className="w-[56px] h-[56px] text-center border border-[#595959] text-2xl font-medium text-gray-700 focus:outline-none"
                            autoFocus={index === 0}
                          />
                        </FormControl>
                        <FormMessage className="text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center px-3">
                <div className="text-[#212121]">Didn&apos;t receive OTP? </div>
                <div>
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-black hover:text-red-800"
                    disabled={isPending}
                  >
                    RESEND OTP
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-[51px] bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-md"
                disabled={isPending}
              >
                Verify
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
