import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Container = styled.form`
  max-width: 1000px;
  min-width: 400px;

  margin: 0 auto;

  border: 1px solid var(--green);
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 0 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    min-width: 200px;

    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0 auto;

    > div {
      display: grid;
      justify-content: space-between;
      width: 100%;
      grid-template-columns: 1fr 1fr;

      button {
        width: 20%;
        justify-self: self-end;
        border: 2px solid var(--green);
        border-radius: 1rem;
        background: transparent;
        color: var(--text-title);
        transition: all 0.8s;
        font-weight: bold;

        &:hover {
          border: 1px solid var(--text-title);
          color: var(--green);
        }
      }
    }

    h1 {
      color: var(--text-title);
      font-size: 2rem;
    }

    input {
      padding: 0.6rem;
      border-radius: 0.5rem;
      border: 0;
      background: var(--shape);
      color: var(--text-title);
      padding-left: 2rem;
      font-size: 1rem;

      &::placeholder {
        color: var(--text-title);
        font-size: 1rem;
        font-weight: bold;
      }
    }

    button[type="submit"] {
      padding: 0.5rem;
      border-radius: 1rem;
      display: grid;
      justify-content: center;
      align-items: center;
      background: var(--green);
      font-size: 1rem;
      font-weight: bold;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
