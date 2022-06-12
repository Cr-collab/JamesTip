import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 640px) {
    align-self: center;
    justify-self: center;
    min-width: 296px;
  }
  border: 1px solid var(--green);
  border-radius: 1rem;
  padding: 1rem;

  min-height: 296px;

  display: grid;
  align-items: center;
  justify-content: center;
  color: var(--text-title);
  gap: 0.5rem;

  p {
    font-size: 1rem;
  }

  p span {
    font-size: 0.8rem;
    color: var(--green);
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
      border: 1px solid var(--green);
      border-radius: 1rem;
      background: transparent;
      color: var(--text-title);
      transition: all 0.5s;

      &:hover {
        border: 1px solid var(--text-title);
        color: var(--green);
      }
    }
  }
`;
