import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { useCrudProduct } from "../../hooks/useCrudProduct";

import { cutOffLongWords } from "../../utils/cutOffLongWords";

import { Container } from "./styles";

interface CardProps {
  product: {
    productCode: string;
    productCategory: string;
    productName: string;
    providerName: string;
    productValue: string;
  };
}
function CardIItemComponent({ product }: CardProps) {
  const navigate = useNavigate();
  function handleRedirectEditProduct(id: string) {
    navigate(`/update-product/${id}`, { replace: true });
  }
  const { deleteProduct } = useCrudProduct();
  return (
    <Container key={product.productCode}>
      <p>
        <span>Código do Produto</span> : {product?.productCode}
      </p>
      <p>
        <span>Categoria do Produto</span>:{" "}
        {cutOffLongWords(product?.productCategory)}
      </p>
      <p>
        <span>Nome do Produto</span> : {cutOffLongWords(product?.productName)}
      </p>
      <p>
        <span>Nome do Fornecedor</span>: {product.providerName}
      </p>

      <p>
        <span>Valor do Produto</span>: R$ {product.productValue}
      </p>
      <div>
        <button onClick={() => deleteProduct(product.productCode)}>
          excluir
        </button>
        <button onClick={() => handleRedirectEditProduct(product.productCode)}>
          editar
        </button>
      </div>
    </Container>
  );
}

export const Card = memo(CardIItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product , nextProps.product)
})
