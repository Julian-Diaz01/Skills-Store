import styled from "styled-components";
{
  /*border-color:${props =>
props.cart?"var(--black)":"var(--lightBlue)"};*/
}

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: rgb(254, 255, 99);
  background: linear-gradient(
    180deg,
    rgba(254, 255, 99, 1) 0%,
    rgba(224, 172, 0, 1) 100%
  );
  color: var(--mainBlue);
  padding: 0.2rem 0.5rem;
  border: 0.05rem;
  border-color: (--mainYellow);
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: rgb(242, 213, 0);
    background: linear-gradient(
      180deg,
      rgba(242, 213, 0, 1) 0%,
      rgba(224, 138, 0, 1) 100%
    );
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
