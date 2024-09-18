import { ComponentPropsWithRef, forwardRef, Ref, useId } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="px-4 pt-5 pb-1 text-left text-sm">
          {label}
        </label>
        <input
          className="mx-4 pl-2 py-1 border hover:text-slate-600 text-slate-600 outline-gray-300"
          id={id}
          ref={ref}
          {...rest}
        />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    );
  }
);
