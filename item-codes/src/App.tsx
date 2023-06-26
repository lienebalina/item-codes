import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "../sample.json";
import { Product, products } from "./components/products";
import { VariantOption, variants } from "./components/variant";
import { Button } from "./components/Button";

export const App = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariations] = useState<
    Record<string, VariantOption | null>
  >({});

  const handleProductSelection = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariations({});
  };

  const handleVariationSelection = (
    variantCode: string,
    option: VariantOption
  ) => {
    setSelectedVariations((prevVariations) => ({
      ...prevVariations,
      [variantCode]: option,
    }));
  };

  return (
    <div className="form">
      <div className="item-code">
        <p>
          {selectedProduct ? "" : "0000"}
          {selectedProduct?.code}
          {Object.keys(selectedVariant).map((variationCode) => {
            const selectedOption = selectedVariant[variationCode];
            return selectedOption ? `.${selectedOption.code}` : "";
          })}
        </p>
      </div>

      <div className="second-divider">
        <h1>Izvēlies produktu:</h1>
        <ul>
          {products.map((product) => (
            <li key={product.code}>
              <Button
                onButtonClick={() => handleProductSelection(product)}
                selected={selectedProduct?.code}
                product={product.code}
              >
                {product.description}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <>
          {selectedProduct.variantTypes.map((variationCode) => {
            const variant = variants.find((v) => v.code === variationCode);
            if (!variant) return null;
            return (
              <div key={variant.code} className="second-divider">
                <h3>{variant.description}</h3>
                <ul>
                  {variant.options.map((option) => (
                    <li key={option.code}>
                      <Button
                        onButtonClick={() =>
                          handleVariationSelection(variant.code, option)
                        }
                        selected={selectedVariant[variant.code]?.code}
                        product={option.code}
                      >
                        {option.description}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default App;
