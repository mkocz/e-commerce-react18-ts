import { useForm, type SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  removeAll,
  selectCount,
  selectProducts,
  selectTotalPrice,
} from "../../features/Basket/basketSlice";
import { Input } from "../../ui/Input";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { Button } from "../../ui/Button";
import { SummaryBlock } from "../../ui/SummaryBlock";

type CustomerFormData = {
  name: string;
  surname: string;
  address: string;
  email: string;
};

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>();

  const counter = useAppSelector(selectCount);
  const totalPrice = useAppSelector(selectTotalPrice);
  const products = useAppSelector(selectProducts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  type OrderProduct = {
    name: string;
    quantity: number;
  };

  type orderType = {
    customerData: CustomerFormData;
    orderProducts: OrderProduct[];
  };

  const handleOrder: SubmitHandler<CustomerFormData> = (data) => {
    const orderData: orderType = {
      customerData: data,
      orderProducts: products.map((product) => {
        return {
          name: product.fields.name,
          quantity: product.quantity ? product.quantity : 0,
        };
      }),
    };

    console.log(orderData);

    navigate(routes.CONFIRMATION.path);
    dispatch(removeAll());
  };

  const validationObject = {
    required: "pole wymagane",
    minLength: {
      value: 3,
      message: "wymagane min 3 znaki",
    },
  };

  return (
    <main className="relative top-16 flex flex-col items-center sm:items-baseline sm:justify-center sm:flex-row mt-16 sm:mb-16 sm:mx-10">
      <form className="flex flex-col w-4/5 sm:w-1/2 lg:w-96 sm:mr-12 lg:mr-32 pb-7 border border-slate-300 text-slate-500">
        <h2 className="py-2 pl-4 border-b-2 text-base font-medium text-left text-slate-500  uppercase">
          Uzupełnij swoje dane
        </h2>
        <Input
          label="Imię"
          {...register("name", validationObject)}
          error={errors.name}
        />
        <Input
          label="Nazwisko"
          {...register("surname", validationObject)}
          error={errors.surname}
        />
        <Input
          label="Adres"
          {...register("address", validationObject)}
          error={errors.address}
        />
        <Input
          label="E-mail"
          {...register("email", {
            required: "pole wymagane",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "niewłaściwy format emaila",
            },
          })}
          type="email"
          error={errors.email}
        />
      </form>
      <SummaryBlock
        header="Twoje zamówienie"
        counter={counter}
        totalPrice={totalPrice}
      >
        <Button
          label="Złóż zamówienie"
          type="submit"
          onClick={() => handleSubmit(handleOrder)()}
        />
      </SummaryBlock>
    </main>
  );
};
