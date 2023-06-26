export type Product = {
  code: string;
  description: string;
  variantTypes: string[];
};

export const products: Product[] = [
  {
    code: "0001",
    description: "T-krekls Rīga",
    variantTypes: ["COLOR", "SIZE"],
  },
  {
    code: "0002",
    description: "T-krekls ar saules attēlu",
    variantTypes: ["SIZE"],
  },
  {
    code: "1001",
    description: "Zābaki 'Great stuff'",
    variantTypes: ["SHOE-SIZE"],
  },
  {
    code: "1002",
    description: "Čības ar puķītēm",
    variantTypes: ["COLOR", "SHOE-SIZE"],
  },
  {
    code: "2001",
    description: "Melna lodīšu pildspalva",
    variantTypes: [],
  },
];
