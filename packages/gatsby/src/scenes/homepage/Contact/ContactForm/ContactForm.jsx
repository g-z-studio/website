import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import {
  Box,
  FormMailTo,
  Input,
  Button,
  TextArea,
  useControlledInput,
} from "@gz-studio/components";

const LabelTag = styled.label`
  position: relative;
`;

const MovingLabel = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

const StyledLabel = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  color: ${({ theme }) => theme.primaryColor.lighter};
  transform: translateY(${({ focus }) => (focus ? "-1.25rem" : 0)});
  font-size: ${({ focus, theme }) =>
    focus ? theme.fontSize.caption : theme.fontSize.heading4};

  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const ContactForm = () => {
  const [fromValue, setFromValue] = useControlledInput("");
  const [subjectValue, setSubjectValue] = useControlledInput();
  const [bodyValue, setBodyValue] = useControlledInput();
  const [submit, setSubmit] = React.useState(false);

  const theme = useContext(ThemeContext);

  // const style = useSpring({
  //   from: { transform: `translateY(0)`, fontSize: theme.fontSize.heading4 },
  //   to: {
  //     transform: `translateY(${!!fromValue ? "-2rem" : 0})`,
  //     fontSize: !!fromValue ? theme.fontSize.caption : theme.fontSize.heading4,
  //   },
  // });

  return (
    <Box horizontal="M">
      <FormMailTo
        email="contact@gz.studio"
        from={fromValue}
        subject={subjectValue}
        body={bodyValue}
        onSubmit={() => setSubmit(!submit)}
      >
        <Box bottom="M">
          <LabelTag>
            <Input
              setState={setFromValue}
              value={fromValue}
              inputMode="email"
            />
            <MovingLabel focus={!!fromValue}>Adresse email</MovingLabel>
          </LabelTag>
        </Box>
        <Box bottom="M">
          <LabelTag htmlFor="subject">
            <Input
              setState={setSubjectValue}
              value={subjectValue}
              id="subject"
            />
            <MovingLabel focus={!!subjectValue}>Sujet</MovingLabel>
          </LabelTag>
        </Box>
        <Box bottom="M">
          <LabelTag htmlFor="body">
            <TextArea setState={setBodyValue} value={bodyValue} id="body" />
            <MovingLabel focus={!!bodyValue}>Message </MovingLabel>
          </LabelTag>
        </Box>
        <Button as="input" type="submit" value="Envoyer" />
        <div> {submit && "Votre message a bien été envoyé"}</div>
      </FormMailTo>
    </Box>
  );
};
