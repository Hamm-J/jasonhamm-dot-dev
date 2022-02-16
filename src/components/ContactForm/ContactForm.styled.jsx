import styled from "styled-components";

export const ContactFormContainer = styled.section``;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 400px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
`;

export const Label = styled.label``;

export const Questions = styled.h3`
  font-family: Palatino;
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  border: 1px solid black;

  &:focus {
    outline: 1px solid #952121;
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  border: 1px solid black;

  &:focus {
    outline: 1px solid #952121;
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  border: 1px solid black;
  resize: vertical;

  &:focus {
    outline: 1px solid #952121;
  }
`;

export const SubmitButton = styled.button`
  background-color: black;
  border: 1px solid black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #952121;
  }

  &:active {
    opacity: 0.85;
  }

  &:focus {
    outline: 1px solid #952121;
  }
`;
