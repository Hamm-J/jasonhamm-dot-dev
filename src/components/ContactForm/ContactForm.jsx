import React from "react";
import {
  ContactFormContainer,
  Form,
  Label,
  InputHidden,
  InputEmail,
  InputText,
  TextArea,
} from "./ContactForm.Styled";
import Comment from "../Common/Comment/Index";
import SectionTitle from "../Common/SectionTitle/Index";
import Button from "../Common/Button/Index";

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <SectionTitle>Contact</SectionTitle>
      <Comment>Socials</Comment>
      <Form
        name="contact-form"
        action="/success/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <InputHidden name="form-name" value="contact-form"></InputHidden>
        <Label htmlFor="name">Name</Label>
        <InputText id="name" name="name"></InputText>
        <Label htmlFor="email">Email</Label>
        <InputEmail id="email" name="email"></InputEmail>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message"></TextArea>
        <Button type="Submit">Send</Button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
