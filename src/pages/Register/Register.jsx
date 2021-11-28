import React from "react";
import { LoginRegistrationLayout } from "components/loginRegistrationLayout";
import { FormHeader } from "components/loginRegistrationLayout";
import cx from "classnames";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <LoginRegistrationLayout>
      <FormHeader title={"login"} subtitle={"coming soon"} />
      <Link to="/login" className={cx("heading4-alt")}>
        Sign up
      </Link>
    </LoginRegistrationLayout>
  );
};
