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
`;

export const Info = styled.div``;

export const Label = styled.label``;

export const InputHidden = styled.input.attrs({ type: "hidden" })``;

export const InputEmail = styled.input.attrs({ type: "email" })``;

export const InputText = styled.input.attrs({ type: "text" })``;

export const TextArea = styled.textarea`
  height: 150px;
`;