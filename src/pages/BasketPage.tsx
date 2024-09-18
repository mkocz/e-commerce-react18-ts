import { BasketList } from "../features/Basket/BasketList.tsx";
import { BasketSummary } from "../features/Basket/BasketSummary.tsx";

export const BasketPage = () => {
  return (
    <main className="relative top-14 my-16">
      <BasketSummary />
      <BasketList />
    </main>
  );
};
