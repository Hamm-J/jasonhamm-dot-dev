import React, { useState } from "react";
import {
  ContactFormContainer,
  ContactGrid,
  Form,
  InfoWrapper,
  Label,
  Questions,
  InputEmail,
  InputText,
  TextArea,
  SubmitButton,
  Confirmation,
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

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setSent(false);
      setLoading(true);
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        //not 200 response
        return;
      }

      //all OK
      setLoading(false);
      setSent(true);
    } catch (error) {
      console.log(error.response.body);
    }
  };

  return (
    <ContactFormContainer
      id="contact"
      htmlFor="name"
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <SectionTitle>Contact</SectionTitle>
      <ContactGrid>
        <InfoWrapper htmlFor="name">
          <Questions
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            Any questions? 📬
          </Questions>
          <div
            data-sal="slide-right"
            data-sal-delay="700"
            data-sal-easing="ease"
          >
            <Comment htmlFor="name">
              Message me and I'll get right back to you!
            </Comment>
            <Comment htmlFor="name">
              Check me out on{" "}
              <GeneralAnchor href="https://github.com/Hamm-J" target="_blank">
                Github
                <FontAwesomeIcon icon={faGithub} />
              </GeneralAnchor>{" "}
              or{" "}
              <GeneralAnchor
                href="https://www.linkedin.com/in/jason-hamm/"
                target="_blank"
              >
                Linked
                <FontAwesomeIcon icon={faLinkedin} />.
              </GeneralAnchor>
            </Comment>
          </div>
          <Confirmation sent={sent}>
            Thank you for your message! 📩
          </Confirmation>
        </InfoWrapper>
        <Form
          name="contact-form"
          action="/success/"
          method="POST"
          onSubmit={submitForm}
        >
          <Label
            htmlFor="name"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            Name
          </Label>
          <InputText
            id="name"
            name="name"
            onChange={onChange}
            required
            // data-sal="slide-up"
            // data-sal-delay="400"
            // data-sal-easing="ease"
          ></InputText>
          <Label
            htmlFor="email"
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-easing="ease"
          >
            Email
          </Label>
          <InputEmail
            id="email"
            name="email"
            onChange={onChange}
            required
            // data-sal="slide-up"
            // data-sal-delay="600"
            // data-sal-easing="ease"
          ></InputEmail>
          <Label
            htmlFor="message"
            data-sal="slide-up"
            data-sal-delay="900"
            data-sal-easing="ease"
          >
            Message
          </Label>
          <TextArea
            id="message"
            name="message"
            onChange={onChange}
            required
            // data-sal="slide-up"
            // data-sal-delay="800"
            // data-sal-easing="ease"
          ></TextArea>
          <SubmitButton
            type="Submit"
            // data-sal="flip-up"
            // data-sal-delay="1000"
            // data-sal-easing="ease"
          >
            {loading ? "Sending..." : "Send"}
          </SubmitButton>
        </Form>
      </ContactGrid>
    </ContactFormContainer>
  );
};

export default ContactForm;
