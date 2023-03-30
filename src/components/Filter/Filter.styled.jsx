import styled from "styled-components";
import { colors } from "../../styles/theme";
import { wrapperContainer } from "../../styles/container";

export const WrapperFilter = styled.div`
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);

    .label-menu{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        background: blue;
    }
`;
