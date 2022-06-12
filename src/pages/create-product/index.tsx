import { FormEvent, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { ReuseMessageBox } from "../../utils/ReuseMessageBox";

import { useCrudProduct } from "../../hooks/useCrudProduct";

import { Container, Main } from "./styles";
export function CreateProduct() {
  const { createProduct, editProduct } = useCrudProduct();

  const { id } = useParams();
  const navigate = useNavigate();

  const [productCode, setProductCode] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [providerName, setProviderName] = useState<string>("");
  const [productValue, setPoductValue] = useState<string>("");

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    let success;

    if (
      productCategory?.length &&
      productCode?.length &&
      productName?.length &&
      productValue?.length &&
      providerName?.length
    ) {
     
      success = createProduct({
        productCode,
        productCategory,
        productName,
        productValue: productValue.replaceAll(",", "."),
        providerName,
      });
    } else {
      ReuseMessageBox({
        msn: " Por favor ensira valores validos!",
        type: "error",
      });
      return false;
    }

    if (success) {
      ReuseMessageBox({
        msn: "Seu produto foi criado",
        type: "success",
      });
    } else {
      ReuseMessageBox({
        msn: "seu produto não foi criado",
        type: "error",
      });

      return false;
    }

    setPoductValue("");
    setProductName("");
    setProductCategory("");
    setProductCode("");
    setProviderName("");
  }

  function handleEditProduct(event: FormEvent) {
    event.preventDefault();
   
   
    editProduct({
      productCode,
      productCategory,
      productName,
      productValue: productValue.replaceAll(",", "."),
      providerName,
    });

    ReuseMessageBox({
      msn: "Seu produto foi editado com sucesso",
      type: "success",
    });

    setPoductValue("");
    setProductName("");
    setProductCategory("");
    setProductCode("");
    setProviderName("");

    navigate(`/`, { replace: true });
  }

  useEffect(() => {
    if (id) {
      const prodcts = JSON.parse(localStorage.getItem("products") || "");

      const productEdit = prodcts.find((pr: any) => pr.productCode === id);

      setPoductValue(productEdit.productValue);
      setProductName(productEdit.productName);
      setProductCategory(productEdit.productCategory);
      setProductCode(productEdit.productCode);
      setProviderName(productEdit.providerName);
    }
  }, []);

  return (
    <>
      <p id="page-wrap">
        <Header />
      </p>
      <Main>
        <Container>
          <div>
            <div>
              <h1>{id ? "Edição de Produtos" : "Criação de Produtos"}</h1>
              {id && (
                <button onClick={() => navigate(`/`, { replace: true })}>
                  voltar
                </button>
              )}
            </div>

            <input
              type="text"
              placeholder="Código do Produto"
              value={productCode}
              required
              onChange={(e) => setProductCode(e.target.value)}
            />

            <input
              type="text"
              placeholder="Categoria do Produto (ex.: Eletrônico)"
              required
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Nome do Produto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Nome do Fornecedor"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Valor do Produto"
              value={productValue}
              onChange={(e) => setPoductValue(e.target.value)}
            />
            {id ? (
              <button type="submit" onClick={handleEditProduct}>
                Editar Produto
              </button>
            ) : (
              <button
                type="submit"
                onClick={(event) => handleCreateNewProduct(event)}
              >
                Criar Produto
              </button>
            )}
          </div>
        </Container>
      </Main>
    </>
  );
}
