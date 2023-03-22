import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    padding: 10px;
    background-color: #131a22;
`;

export const CatsContainer = styled.div`
    padding: 10px;
    margin-top: 10px;
    background-color: #fff;
    width: 100vw;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 500px;
    padding: 10px;
    margin: 30px;
`;

export const CardImage = styled.img`
    width: 500px;
    object-fit: cover;
`;

export const CardButton = styled.button`
    margin-top: 16px;
    padding: 8px 16px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;
