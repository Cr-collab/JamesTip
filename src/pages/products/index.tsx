import { useCrudProduct } from "../../hooks/useCrudProduct";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Products() {
  const { products } = useCrudProduct();

  return (
    <main id="page-wrap">
      <Header />
      <Container>
        {products.map((product) => (
          <Card product={product} key={product.productCode} />
        ))}
      </Container>
    </main>
  );
}
