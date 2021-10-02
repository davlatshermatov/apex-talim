import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  padding: ${(props) => (props.thin ? "15px 50px" : "20px 50px")};
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  width: ${(props) => (props.fluid ? "100%" : "")};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    transition: all 0.3s ease-in-out;
    font-weight: 700;
  }

  @media (max-width: 992px) {

  }

  @media (max-width: 768px) {
    width: 300px;
    padding: 30px;
  }

  @media (max-width: 640px) {

}
`;
