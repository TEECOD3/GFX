"use client";
import React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "please input a valid email address" }),
});

type Props = {};

export const NewsLetter = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="bg-primary text-white mt-20">
      <div className="py-20 lg:py-32 max-w-7xl mx-auto max-lg:px-5 gap-y-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full">
          <div className="w-full lg:w-[85%] space-y-2">
            <p className="text-4xl lg:text-6xl font-bold">
              Did You Find Your Dream Home?
            </p>
            <p className="text-sm lg:text-base font-medium lg:w-11/12">
              Thank you for getting in touch! if you find your dream home
              connect with us
            </p>
          </div>
        </div>
        <div className="w-full max-lg:mx-auto ">
          <div className="h-16 w-9/12 bg-white/40 relative flex items-center ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-x-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="border-none outline-none bg-transparent placeholder:text-white text-white "
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 "
                >
                  Subscribe now
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
