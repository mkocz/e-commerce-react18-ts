import { useState, useEffect, ReactNode } from "react";

type Props = {
  message: string;
  children?: ReactNode;
};

export const Alert = ({ message, children }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const colorStyles =
    "bg-lime-200 text-lg text-lime-700 border-lime-500 rounded";
  const opacity = visible ? "top-5 opacity-100" : "-top-20 opacity-0";

  return (
    <div
      className={`fixed top-0 left-1/2 right-0 min-w-[280px] transform -translate-x-1/2 z-10 border p-7 transition-all duration-[2000ms] ease-out text-center tracking-wide ${opacity} ${colorStyles}`}
      role="alert"
    >
      <p className="mb-4 text-lg">{message}</p>
      {children}
    </div>
  );
};
