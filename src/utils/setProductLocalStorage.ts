interface IProducts {
  productCode: string;
  productCategory: string;
  productName: string;
  providerName: string;
  productValue: string;
}

interface setProductLocalStorageParameters {
  Products: IProducts[];
}
export function setProductLocalStorage({
  Products,
}: setProductLocalStorageParameters) {
  localStorage.setItem("products", JSON.stringify([...Products]));
}
