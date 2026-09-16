"use client";

import { useCurrency } from "./CurrencyProvider";

type ProductPriceProps = {
  price: string | number;
};

export function ProductPrice({ price }: ProductPriceProps) {
  const { formatPrice } = useCurrency();

  return <>{formatPrice(price)}</>;
}
