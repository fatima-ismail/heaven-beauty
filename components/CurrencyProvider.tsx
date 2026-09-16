"use client";

import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { currencies } from "@/lib/content";

export type Currency = (typeof currencies)[number];

type CurrencyContextValue = {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  formatPrice: (price: string | number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);
const storageKey = "heaven-beauty-currency";

function getPriceValue(price: string | number) {
  if (typeof price === "number") {
    return price;
  }

  const numericPrice = Number.parseFloat(price.replace(/[^0-9.]/g, ""));

  return Number.isFinite(numericPrice) ? numericPrice : 0;
}

function formatAmount(amount: number, currency: Currency) {
  const convertedAmount = amount * currency.rate;
  const hasCents = convertedAmount % 1 !== 0;
  const formattedAmount = convertedAmount.toLocaleString("en-US", {
    maximumFractionDigits: hasCents ? 2 : 0,
    minimumFractionDigits: hasCents ? 2 : 0
  });

  return currency.code === "USD" ? `$${formattedAmount}` : `${formattedAmount} ${currency.symbol}`;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrencyState] = useState<Currency>(currencies[0]);

  useEffect(() => {
    const savedCurrencyCode = window.localStorage.getItem(storageKey);
    const savedCurrency = currencies.find((currency) => currency.code === savedCurrencyCode);

    if (savedCurrency) {
      setSelectedCurrencyState(savedCurrency);
    }
  }, []);

  const setSelectedCurrency = (currency: Currency) => {
    setSelectedCurrencyState(currency);
    window.localStorage.setItem(storageKey, currency.code);
  };

  const contextValue = useMemo(
    () => ({
      selectedCurrency,
      setSelectedCurrency,
      formatPrice: (price: string | number) => formatAmount(getPriceValue(price), selectedCurrency)
    }),
    [selectedCurrency]
  );

  return <CurrencyContext.Provider value={contextValue}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error("useCurrency must be used inside CurrencyProvider");
  }

  return context;
}
