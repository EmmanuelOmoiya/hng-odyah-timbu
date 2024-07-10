import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";


interface ProductsContextType {
  products: any[];
  setProducts: Dispatch<SetStateAction<any[]>>
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProductsContext must be used within a ProductsProvider");
  }
  return context;
};

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
