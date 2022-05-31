import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


export const Input = styled.input`
    min-height: 48px;
    max-width: 150px;
    padding: 0 1rem;
    color: #fff;
    font-size: 15px;
    border: 1px solid #5e4dcd;
    border-radius: 6px 0 0 6px;
    background-color: transparent;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
    
`;

export const Button = styled.button`
    min-height: 50px;
    padding: .5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #5e4dcd;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;

        &:hover{
            background-color: #5e5dcd;
        }

        &:focus,
        &:focus-visible {
            border-color: #3898EC;
            outline: none;
        }

`;

