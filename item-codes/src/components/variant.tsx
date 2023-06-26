export interface VariantOption {
  code: string;
  description: string;
  type?: string;
}

export interface Variant {
  code: string;
  description: string;
  options: VariantOption[];
}

export const variants: Variant[] = [
  {
    code: "SIZE",
    description: "Size",
    options: [
      { code: "S", description: "Small", type: "shirt" },
      { code: "M", description: "Medium", type: "shirt" },
      { code: "L", description: "Large", type: "shirt" },
    ],
  },
  {
    code: "COLOR",
    description: "Color",
    options: [
      { code: "RED", description: "Red", type: "shirt" },
      { code: "BLU", description: "Blue", type: "shirt" },
      { code: "WHI", description: "White", type: "shirt" },
    ],
  },
  {
    code: "SHOE-SIZE",
    description: "Shoe Size",
    options: [
      { code: "37", description: "37" },
      { code: "38", description: "38" },
      { code: "39", description: "39" },
      { code: "40", description: "40" },
      { code: "41", description: "41" },
      { code: "42", description: "42" },
      { code: "43", description: "43" },
      { code: "44", description: "44" },
    ],
  },
];
