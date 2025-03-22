"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import VreduxLogo from "./vredux-logo";

interface AuthFormProps {
  mode: "login" | "register";
}

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(25, "Username cannot exceed 25 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  inviteCode: z.string().min(1, "Invitation code is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

export function AuthForm({ mode }: AuthFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const schema = mode === "login" ? loginSchema : registerSchema;
  const form = useForm<LoginFormValues | RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: mode === "login"
      ? { email: "", password: "" }
      : { username: "", email: "", password: "", confirmPassword: "", inviteCode: "" },
  });

  function onSubmit(values: LoginFormValues | RegisterFormValues) {
    console.log(values);
    // тут потом подключим авторизацию к бэкенду, пока заглушка
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-card/50 backdrop-blur-md border border-border/50 rounded-xl shadow-xl"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <VreduxLogo className="mx-auto mb-6" />
          </Link>
          <h1 className="text-2xl font-bold font-heading">
            {mode === "login" ? "Welcome Back" : "Create Your Account"}
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            {mode === "login"
              ? "Enter your credentials to access your account"
              : "Join our exclusive platform by invitation only"}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {mode === "register" && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your-email@example.com"
                      type="email"
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-sm font-medium">Password</FormLabel>
                    {mode === "login" && (
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot your password?
                      </Link>
                    )}
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder={mode === "login" ? "Enter your password" : "Create a password"}
                        type={isPasswordVisible ? "text" : "password"}
                        className="bg-secondary/50 border-border/50 focus:border-primary pr-10"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      >
                        {isPasswordVisible ? (
                          <EyeOffIcon className="h-4 w-4" />
                        ) : (
                          <EyeIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {mode === "register" && (
              <>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm your password"
                          type={isPasswordVisible ? "text" : "password"}
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="inviteCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Invitation Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your invitation code"
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </>
            )}

            <Button
              type="submit"
              className="w-full bg-primary text-black hover:bg-primary/90 font-medium mt-6 animate-glow"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </Button>

            {mode === "login" && (
              <div className="mt-6">
                <Separator className="mb-6" />
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-primary hover:underline font-medium">
                    Register
                  </Link>
                </p>
              </div>
            )}

            {mode === "register" && (
              <div className="mt-6">
                <Separator className="mb-6" />
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Sign In
                  </Link>
                </p>
              </div>
            )}
          </form>
        </Form>
      </motion.div>

      <div className="text-center mt-8">
        <p className="text-xs text-muted-foreground">
          By using our service, you agree to our{" "}
          <Link href="/terms" className="text-muted-foreground hover:text-foreground underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

// иконки для видимости пароля, стырил из интернета
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}
