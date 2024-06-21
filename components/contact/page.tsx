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
import car1 from "@/public/images/car1.jpg";
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

  const sendEmail = (data: any) => {
    console.log("Form submission started");

    if (form.current) {
      emailjs
        .sendForm(
          "service_pmps2ka",
          "template_7rde9sc",
          form.current,
          "hhavqmlJI_oNtc7Gf"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setShowMessage(true);
            reset(); // Clear the form
            setTimeout(() => {
              setShowMessage(false);
            }, 2000);
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Something went wrong");
          }
        )
        .catch((error) => {
          console.error("Catch block error:", error);
        });
    } else {
      console.error("Form reference is undefined.");
    }

    console.log("Form submission ended");
  };

  return (
    <div
      id="contact"
      className="contact relative flex items-center justify-center min-h-screen w-full"
    >
      <Image
        src={car1}
        alt="car"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md z-10">
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
                      <Input placeholder="name" {...field} />
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
                      <Input placeholder="example@example.com" {...field} />
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
                      <Textarea placeholder="Your message" {...field} />
                    </FormControl>
                    {errors.message?.message && (
                      <FormMessage>
                        {errors.message.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send
              </Button>
            </CustomForm>
          </FormProvider>
        )}
      </div>
    </div>
  );
}
