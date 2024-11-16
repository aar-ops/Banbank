import { Control, FieldPath, useForm } from "react-hook-form";
import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";

const FormSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof FormSchema>>;
  name: FieldPath<z.infer<typeof FormSchema>>;
  label: string;
  placeholder: string;
}

export const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};
