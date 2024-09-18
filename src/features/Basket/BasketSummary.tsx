import { useAppSelector } from "../../hooks/redux";
import { selectCount, selectTotalPrice } from "./basketSlice";
import { routes } from "../../routes";
import { Button } from "../../ui/Button";
import { SummaryBlock } from "../../ui/SummaryBlock";

export const BasketSummary = () => {
  const counter = useAppSelector(selectCount);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <section>
      {counter === 0 ? (
        <div className="w-4/5 md:w-1/3 xl:w-1/5 m-auto mt-20 p-7 border border-slate-400">
          <h1 className="mb-5 text-base font-medium uppercase text-slate-500 ">
            Twój koszyk jest pusty
          </h1>
          <Button
            label="Wróć do sklepu"
            route={routes.PRODUCTS.path}
            isFullWidth={false}
          />
        </div>
      ) : (
        <>
          <SummaryBlock
            header="Twój koszyk"
            counter={counter}
            totalPrice={totalPrice}
            isCentralized={true}
          >
            <Button label="Zamów" route={routes.CHECKOUT.path} />
          </SummaryBlock>
          <div className=" m-auto my-8">
            <Button
              label="Kontynuuj zakupy"
              route={routes.PRODUCTS.path}
              isFullWidth={false}
              isReversed={true}
            ></Button>
          </div>
        </>
      )}
    </section>
  );
};
