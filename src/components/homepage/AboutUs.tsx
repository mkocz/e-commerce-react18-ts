import { FaLeaf } from "react-icons/fa6";

export const AboutUs = () => {
  return (
    <section className="m-auto p-4 sm:p-10 bg-white text-slate-400 cursor-default">
      <h2 className="text-2xl sm:text-3xl p-3 font-bold uppercase">
        Odryj nasze zioła
      </h2>
      <p className="sm:w-1/2 m-auto my-3 text-slate-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <p className="sm:w-2/3 m-auto text-slate-500">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <FaLeaf className="m-auto mt-8 text-4xl sm:text-7xl text-slate-300" />
    </section>
  );
};
