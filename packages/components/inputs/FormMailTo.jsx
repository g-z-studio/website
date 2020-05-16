import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const FormMailTo = ({ email, from, subject, body, ...props }) => {
  return (
    <StyledForm
      action={`mailto:${email}?cc${encodeURIComponent(from) ||
        ""}subject=${encodeURIComponent(subject) || ""}&body=${encodeURIComponent(body) ||
        ""}`}
      {...props}
      method="POST"
    >
      {props.children}
    </StyledForm>
  );
};

// export const FormMailTo = styled.form.attrs(
//   ({ email, from, subject, body, ...props }) => ({
//     action: `mailto:${email}?cc${encodeURIComponent(from) ||
//       ""}&subject=${encodeURIComponent(subject) || ""}&body=${encodeURIComponent(body) ||
//       ""}`,
//     method: "POST",
//     enctype: "text/plain",
//     ...props,
//   }),
// )`
//   display: flex;
//   flex-direction: column;
// `;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

FormMailTo.propTypes = {
  email: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
