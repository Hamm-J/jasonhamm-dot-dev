import React, { useState } from "react";
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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        //not 200 response
        return;
      }

      //all OK
      alert("mail sent");
    } catch (error) {
      console.log(error.response.body);
    }
  };

  return (
    <ContactFormContainer>
      <SectionTitle>Contact</SectionTitle>
      <Comment>Socials</Comment>
      <Form
        name="contact-form"
        action="/success/"
        method="POST"
        onSubmit={submitForm}
        // data-netlify="true"
        // data-netlify-honeypot="bot-field"
      >
        {/* <InputHidden name="form-name" value="contact-form"></InputHidden> */}
        <Label htmlFor="name">Name</Label>
        <InputText id="name" name="name" onChange={onChange}></InputText>
        <Label htmlFor="email">Email</Label>
        <InputEmail id="email" name="email" onChange={onChange}></InputEmail>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" onChange={onChange}></TextArea>
        <Button type="Submit">Send</Button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
