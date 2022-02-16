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

export const Label = styled.label`
  font-family: Trebuchet MS;
`;

export const Questions = styled.h3`
  font-family: Palatino;
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  border: 1px solid black;
  font-family: Trebuchet MS;
  border-radius: 3px;

  &:focus {
    outline: 2px solid #952121;
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  border: 1px solid black;
  border-radius: 3px;
  font-family: Trebuchet MS;

  &:focus {
    outline: 2px solid #952121;
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  border: 1px solid black;
  resize: vertical;
  border-radius: 3px;
  font-family: Trebuchet MS;

  &:focus {
    outline: 2px solid #952121;
  }
`;

export const SubmitButton = styled.button`
  background-color: black;
  border: 1px solid black;
  color: white;
  font-family: Trebuchet MS;
  cursor: pointer;
  border-radius: 3px;
  margin-top: 5px;

  &:hover {
    background-color: #952121;
  }

  &:active {
    opacity: 0.85;
  }

  &:focus {
    outline: 3px solid #952121;
  }
`;

export const Confirmation = styled.h3`
  margin-top: 60px;
  font-family: Palatino;
  color: #952121;
  transform: ${(props) => (props.sent ? "translateY(0)" : "translateY(-15px)")};
  opacity: ${(props) => (props.sent ? "1" : "0")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  cursor: ${(props) => (props.sent ? "text" : "default")};
`;
