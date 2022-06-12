interface IProducts {
  productCode: string;
  productCategory: string;
  productName: string;
  providerName: string;
  productValue: string;
}
export function getProductsLocalStorage() {
  const products: IProducts[] = JSON.parse(
    localStorage.getItem("products") || "[]"
  );

  return products;
}
