import styled from "styled-components";

export const Container =  styled.main`
max-width: 1120px;
margin: 0 auto;
padding: 0 2rem;
margin-top: 5rem;

display: grid;
grid-template-columns: repeat(4,1fr);


@media (max-width: 1000px) {
grid-template-columns: repeat(3,1fr);  
}

@media (max-width: 700px) {
grid-template-columns: repeat(2,1fr);  
}

@media (max-width: 640px) {
grid-template-columns: repeat(1,1fr);  
}


grid-auto-columns:minmax(223.75px,252px) ;
gap: 1rem;
`

