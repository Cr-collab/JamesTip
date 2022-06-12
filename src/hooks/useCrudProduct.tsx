import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

import { getProductsLocalStorage } from "../utils/getProductsLocalStorage";
import { setProductLocalStorage } from "../utils/setProductLocalStorage";

import { toast } from "react-toastify";

interface CrudProductProviderProps {
  children: ReactNode;
}

interface ICreateProduct {
  productCode: string;
  productCategory: string;
  productName: string;
  providerName: string;
  productValue: string;
}

interface CrudProductProps {
  createProduct(product: ICreateProduct): boolean | undefined;
  deleteProduct(id: string): void;
  editProduct(product: ICreateProduct): void;
  products: ICreateProduct[];
  isVisibleMenuMobile: boolean;
  setIsVisibleMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const CrudProductContext = createContext<CrudProductProps>(
  {} as CrudProductProps
);

export function CrudProductProvider({ children }: CrudProductProviderProps) {
  const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false);
  const [products, setProducts] = useState<ICreateProduct[]>([]);
  let productsLocalStorage = getProductsLocalStorage();

  function listProductAll() {
    const response: ICreateProduct[] = getProductsLocalStorage();
    setProducts(response);
  }

  function createProduct(product: ICreateProduct) {
    productsLocalStorage = getProductsLocalStorage();


    const isCodeProductRepeat = productsLocalStorage.find(
      (data: ICreateProduct) => data.productCode === product.productCode
    );

    if (isCodeProductRepeat) {
      return false;
    }

    let Products = [...productsLocalStorage, product];

    setProductLocalStorage({
      Products,
    });

    productsLocalStorage = getProductsLocalStorage();

    const productCreate = productsLocalStorage.find(
      (prod: ICreateProduct) => prod.productCode === product.productCode
    );

    if (productCreate) {
      setProducts([...productsLocalStorage]);
      return true;
    }
  }

  function deleteProduct(id: string) {
    productsLocalStorage = getProductsLocalStorage();

    const Products = productsLocalStorage.filter(
      (product) => product.productCode !== id
    );

    setProductLocalStorage({
      Products,
    });
    productsLocalStorage = getProductsLocalStorage();

    const productDelete = productsLocalStorage.find(
      (pr: ICreateProduct) => pr.productCode === id
    );

    if (!productDelete) {
      setProducts([...Products]);
      toast.success("Seu produto foi deletado", {
        theme: "colored",
      });
    } else {
      toast.error("Seu produto não foi deletado", {
        theme: "colored",
      });
    }
  }

  function editProduct(product: ICreateProduct) {
    productsLocalStorage = getProductsLocalStorage();

    const Products = productsLocalStorage.map((pr) => {
      if (pr.productCode === product.productCode) {
        return product;
      } else {
        return pr;
      }
    });

    setProducts(Products);
    setProductLocalStorage({ Products });

    return true;
  }

  useEffect(() => {
    listProductAll();
  }, []);

  return (
    <CrudProductContext.Provider
      value={{
        createProduct,
        products,
        deleteProduct,
        editProduct,
        isVisibleMenuMobile,
        setIsVisibleMenuMobile,
      }}
    >
      {children}
    </CrudProductContext.Provider>
  );
}

export function useCrudProduct() {
  const context = useContext(CrudProductContext);

  return context;
}
