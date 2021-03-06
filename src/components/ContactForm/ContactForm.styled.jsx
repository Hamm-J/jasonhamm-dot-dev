import styled from "styled-components";

export const ContactFormContainer = styled.section``;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.fontBody};
  font-size: 20px;
`;

export const Questions = styled.h3`
  font-family: ${(props) => props.theme.fontTitle};
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  border: 2px solid ${(props) => props.theme.colorPrimary};
  font-family: ${(props) => props.theme.fontBody};
  border-radius: 3px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  margin-bottom: 5px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  border: 2px solid ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontBody};
  box-sizing: border-box;
  margin-bottom: 5px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  min-height: 32px;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  resize: vertical;
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontBody};
  box-sizing: border-box;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.colorSecondary};
  font-family: ${(props) => props.theme.fontBody};
  cursor: pointer;
  border-radius: 3px;
  margin-top: 5px;
  padding: 10px 0 10px 0;
  font-size: 24px;

  &:hover {
    background-color: ${(props) => props.theme.colorAccent};
  }

  &:active {
    opacity: 0.85;
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.colorAccent};
  }
`;

export const Confirmation = styled.h3`
  margin-top: 60px;
  font-family: ${(props) => props.theme.fontTitle};
  font-size: 20px;
  color: ${(props) => props.theme.colorAccent};
  transform: ${(props) => (props.sent ? "translateY(0)" : "translateY(-15px)")};
  opacity: ${(props) => (props.sent ? "1" : "0")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  cursor: ${(props) => (props.sent ? "text" : "default")};
`;
