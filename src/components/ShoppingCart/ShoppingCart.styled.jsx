import styled from "styled-components";
import { colors } from "../../styles/theme";
import { wrapperContainer } from "../../styles/container";

export const WrapperShoppingCart = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: red;
    padding: 1rem;
    align-items: center;
    .title-order {
    font-size: 20px;
    font-weight: 600;
    color: white;
}

.order-list {
    list-style: none;
    padding: 5px;
}

.button-send {
    width: 100%;
    border: none;
    padding: 8px;
    border-radius: 5px;
    background: #FE9A2E;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}
`;
