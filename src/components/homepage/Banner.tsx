export const Banner = () => {
  return (
    <header className="relative h-[50vh]">
      <img
        className="fixed h-[80vh] w-full z-[-1] object-cover "
        src="images/biebrza.jpg"
        alt=""
      />
      <h1 className="absolute bottom-10 right-3 sm:right-12 md:right-20 2xl:mr-72 w-[280px] sm:w-[320px] p-2 border-y text-3xl sm:text-3xl text-left font-medium sm:font-bold uppercase text-white sm:tracking-wide cursor-default">
        Najlepsze zioła prosto z natury
      </h1>
    </header>
  );
};
