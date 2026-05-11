import type React from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
}

export function FormField({ name, placeholder, type = "text" }: FieldProps) {
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();

  return (
    <input
      type={type}
      className="w-full bg-slate-400/30 p-2 rounded-xl text-sm border border-slate-300"
      placeholder={placeholder}
    />
  );
}

// export function FormField({ name, label, type = "text" }: FieldProps) {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div className="flex flex-col">
//       <label className="text-slate-500">{label}</label>
//       <input
//         {...register(name)}
//         type={type}
//         placeholder="your@email.com"
//         className="border border-slate-500 rounded-sm h-8 px-1"
//       />
//       {errors[name] && (
//         <span className="text-red-400">{errors[name]?.message as string}</span>
//       )}
//     </div>
//   );
// }
