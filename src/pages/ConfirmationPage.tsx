import { routes } from "../routes";
import { Button } from "../ui/Button";

export const ConfirmationPage = () => {
  return (
    <main className="relative top-32 sm:top-48 text-xl">
      <section className=" flex flex-col gap-2 mx-12 mb-10">
        <h1>Dziękujemy za złożenie zamówienia.</h1>
        <p>Na podany adres email wyślemy dane do przelewu.</p>
        <p>Produkty zostaną wysłane po otrzymaniu płatności.</p>
      </section>
      <Button
        label="Wróć do sklepu"
        route={routes.PRODUCTS.path}
        isFullWidth={false}
      />
    </main>
  );
};
