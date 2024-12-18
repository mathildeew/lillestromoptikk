export const PortableTextBrands = {
  blocks: {
    normal: ({ children }) => <p className="text-red-500">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  },
};
