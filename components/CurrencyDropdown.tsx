"use client";

import { useState } from "react";
import { currencies } from "@/lib/content";
import { useCurrency } from "./CurrencyProvider";

export function CurrencyDropdown() {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="currency-dropdown">
      <button
        className="currency"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Change currency"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="currency__flag" aria-hidden="true">
          <img src={selectedCurrency.flag} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </span>
        <span>{selectedCurrency.code}</span>
        <span className="currency__chevron" aria-hidden="true">
          v
        </span>
      </button>
      {isOpen ? (
        <div className="currency-menu" role="listbox" aria-label="Choose currency">
          {currencies.map((currency) => (
            <button
              className={currency.code === selectedCurrency.code ? "is-selected" : ""}
              key={currency.code}
              type="button"
              role="option"
              aria-selected={currency.code === selectedCurrency.code}
              onClick={() => {
                setSelectedCurrency(currency);
                setIsOpen(false);
              }}
            >
              <span className="currency__flag" aria-hidden="true">
                <img src={currency.flag} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </span>
              <span>{currency.code}</span>
              <small>{currency.country}</small>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
