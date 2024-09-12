"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import contact from "@/public/images/contact.jpeg";
import CustomForm from "@/components/customForm/page"; // Adjust the path accordingly

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  user_email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
});

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for disabling the button
  const form = useRef<HTMLFormElement | null>(null);
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  const sendEmail = async (data: any) => {
    console.log("Form submission started");
    setIsSubmitting(true); // Disable button when submitting

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        );
        console.log("Email sent successfully:", result.text);
        setShowMessage(true);
        reset(); // Clear the form
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again.");
      }
    } else {
      console.error("Form reference is undefined.");
    }

    setIsSubmitting(false); // Enable button again
    console.log("Form submission ended");
  };

  return (
    <div
      id="contact"
      className="contact relative flex items-center justify-center min-h-screen w-full"
    >
      <Image src={contact} alt="car" fill quality={100} className="z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="absolute bg-white bg-opacity-80 p-8 rounded-lg shadow-md  max-w-md z-10 w-[80vw]">
        {showMessage ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-green-500">
              Email sent successfully!
            </p>
          </m.div>
        ) : (
          <FormProvider {...methods}>
            <CustomForm
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="space-y-8"
            >
              <FormField
                control={control}
                name="user_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name"
                        {...field}
                        value={field.value || ""} // Ensure controlled input
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    {errors.user_name?.message && (
                      <FormMessage>
                        {errors.user_name.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@example.com"
                        {...field}
                        value={field.value || ""} // Ensure controlled input
                      />
                    </FormControl>
                    {errors.user_email?.message && (
                      <FormMessage>
                        {errors.user_email.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        {...field}
                        value={field.value || ""} // Ensure controlled input
                      />
                    </FormControl>
                    {errors.message?.message && (
                      <FormMessage>
                        {errors.message.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </CustomForm>
          </FormProvider>
        )}
      </div>
    </div>
  );
}
