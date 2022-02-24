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
  font-family: ${(props) => props.theme.fontBody};
`;

export const Questions = styled.h3`
  font-family: ${(props) => props.theme.fontTitle};
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  border: 1px solid ${(props) => props.theme.colorPrimary};
  font-family: ${(props) => props.theme.fontBody};
  border-radius: 3px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  border: 1px solid ${(props) => props.theme.colorPrimary};
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontBody};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  border: 1px solid ${(props) => props.theme.colorPrimary};
  resize: vertical;
  border-radius: 3px;
  font-family: ${(props) => props.theme.fontBody};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  border: 1px solid ${(props) => props.theme.colorPrimary};
  color: white;
  font-family: ${(props) => props.theme.fontbody};
  cursor: pointer;
  border-radius: 3px;
  margin-top: 5px;
  padding: 10px 0 10px 0;

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
  color: ${(props) => props.theme.colorAccent};
  transform: ${(props) => (props.sent ? "translateY(0)" : "translateY(-15px)")};
  opacity: ${(props) => (props.sent ? "1" : "0")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  cursor: ${(props) => (props.sent ? "text" : "default")};
`;
