import React, { createContext, useContext } from "react";
import { core, z } from "zod";
import {
  useForm,
  type UseFormReturn,
  type FieldValues,
  type DefaultValues,
  type SubmitHandler,
  FormProvider as RHFFormProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AppFormContextValue<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const AppFormContext = createContext<AppFormContextValue<any> | null>(null);

export function useAppFormContext<T extends FieldValues>() {
  const ctx = useContext(AppFormContext);
  if (!ctx) throw new Error("useFormContext must be used inside <Form>");
  return ctx.form as UseFormReturn<T>;
}

interface AppFormProps<T extends FieldValues> {
  schema: z.ZodType<T, core.$ZodTypeDef, any>;
  defaultValues?: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
}

export function AppForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
}: AppFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema as any),
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  return (
    <AppFormContext.Provider value={{ form }}>
      <RHFFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={className}
          noValidate
        >
          {children}
        </form>
      </RHFFormProvider>
    </AppFormContext.Provider>
  );
}
