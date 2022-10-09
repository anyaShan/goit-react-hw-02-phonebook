import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3px 15px;
    text-align: center;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    background-color: rgb(241, 188, 90);
    color: inherit;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
      rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    font-weight: 700;
    font-size: 12px;
    line-height: 1.9;
    letter-spacing: 0.06em;

    &:hover {
      background-color: rgb(52, 162, 212);
    }
  }
`;
