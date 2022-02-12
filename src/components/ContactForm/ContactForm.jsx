import React, { useState } from "react";
import {
  ContactFormContainer,
  ContactGrid,
  Form,
  Info,
  Label,
  InputEmail,
  InputText,
  TextArea,
  SubmitButton,
} from "./ContactForm.styled";
import Comment from "../Common/Comment/Index";
import SectionTitle from "../Common/SectionTitle/Index";
import GeneralAnchor from "../Common/GeneralAnchor/GeneralAnchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
    <ContactFormContainer id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactGrid>
        <Info>
          <Comment>Got any questions?</Comment>
          <Comment>Message me and I'll get right back to you.</Comment>
          <Comment>
            Also, feel free to reach out to me or find me on{" "}
            <GeneralAnchor href="https://github.com/Hamm-J" target="_blank">
              Github
              <FontAwesomeIcon icon={faGithub} />
            </GeneralAnchor>{" "}
            or{" "}
            <GeneralAnchor href="https://linkedin.com/" target="_blank">
              LinkedIn
              <FontAwesomeIcon icon={faLinkedin} />
            </GeneralAnchor>
          </Comment>
        </Info>
        <Form
          name="contact-form"
          action="/success/"
          method="POST"
          onSubmit={submitForm}
        >
          <Label htmlFor="name">Name</Label>
          <InputText id="name" name="name" onChange={onChange}></InputText>
          <Label htmlFor="email">Email</Label>
          <InputEmail id="email" name="email" onChange={onChange}></InputEmail>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" onChange={onChange}></TextArea>
          <SubmitButton type="Submit">Send</SubmitButton>
        </Form>
      </ContactGrid>
    </ContactFormContainer>
  );
};

export default ContactForm;
