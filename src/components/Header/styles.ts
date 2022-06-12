import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--shape);

  padding: 0 2rem;
  
  div {
    width: 100%;
    height: 5rem;

    max-width: 1120px;
    margin: 0 auto;

    display: flex;

    @media (max-width: 600px) {
         nav {
          display: none;
         }
    }
    
    nav {
      height: 5rem;
      margin-left: 5rem;
      

      a {
        display: inline-block;
        position: relative;

        line-height: 5rem;

        text-decoration: none;

        color: var(--text-title);

        font-weight: bold;

        & + a {
          margin-left: 2rem;
        }

        &.active::after {
          content: "";

          height: 3px;
          border-radius: 3px 3px 0 0;

          width: 100%;

          position: absolute;
          bottom: 1px;
          left: 0;

          background: var(--green);
        }

        &.ative:hover{
           color: var(--text-title);
        }

        &:hover {
          filter: brightness(0.9);
        }

      }

    
    }
  }
`;
