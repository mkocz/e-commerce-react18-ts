import { ReactNode } from "react";

type Props = {
  header: string;
  counter: number;
  totalPrice: number;
  isCentralized?: boolean;
  children: ReactNode;
};

export const SummaryBlock = ({
  header,
  counter,
  totalPrice,
  isCentralized = false,
  children,
}: Props) => {
  const marginAuto = isCentralized ? "m-auto" : "";
  return (
    <section
      className={`flex flex-col justify-between h-56 w-4/5 sm:w-80 ${marginAuto} my-10 sm:my-0 pb-6 border border-slate-300 text-slate-400  text-left`}
    >
      <h2 className="py-2 pl-4 border-b-2 border-slate-300 uppercase text-base text-left text-slate-500 font-medium">
        {header}
      </h2>
      <div className="flex flex-col flex-grow justify-between px-4 pt-4 text-slate-500">
        <p>Liczba produktów: {counter}</p>
        <p>Do zapłaty: {totalPrice}zł</p>
        {children}
      </div>
    </section>
  );
};
