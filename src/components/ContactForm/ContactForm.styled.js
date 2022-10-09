import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.06em;
  }

  input {
    padding: 10px;
    border: 1px solid rgb(241, 188, 90);
    border-radius: 4px;
    background-color: white;

    &::placeholder {
      color: rgba(52, 162, 212, 0.5);

      font-size: 16px;
      line-height: 1.25px;
    }

    /* color: rgba(52, 162, 212, 0.5); */
  }

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
