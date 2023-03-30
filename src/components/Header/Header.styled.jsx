import styled from "styled-components";
import { colors } from "../../styles/theme";
import { wrapperContainer } from "../../styles/container";

export const Wrapperheader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  .title{
    color: white;
    font-weight: 600;
    font-size: 24px;
  }
  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    ${wrapperContainer};
    .logo {
      img {
        width: 100%;
        height: 30px;
      }
    }
    .navigation {
      display: flex;
      gap: 1rem;
      .navigation-item {
        color: ${colors.white};
        font-size: 0.8rem;
        cursor: pointer;
        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }
      @media (min-width: 768px) {
        gap: 3rem;
      }
    }
    @media (min-width: 768px) {
      padding: 0;
    }
  }
  @media (min-width: 768px) {
    padding: 1rem;
  }
`;
