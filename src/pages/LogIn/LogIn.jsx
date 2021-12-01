import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "features/context";
import { Link } from "react-router-dom";
import { LoginRegistrationLayout } from "components/loginRegistrationLayout";
import { FormHeader } from "components/loginRegistrationLayout";
import { Input } from "components/input";
import { Button } from "components/button";
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import cx from "classnames";

export const LogIn = () => {
  const { logInUser } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    fetch("api/users")
      .then((data) => data.json())
      .then((res) => {
        setUsers(res.users);
      });
  }, []);

  const onSubmit = (data) => {
    if (authenticateUser(data)) {
      reset();
    }
  };

  const authenticateUser = (data) => {
    const currentUser = users.filter((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (currentUser.length < 1) {
      setUserExists(true);
      return false;
    } else {
      setUserExists(false);
      logInUser(currentUser);
      return true;
    }
  };

  const resetError = () => {
    setUserExists(false);
  };

  return (
    <LoginRegistrationLayout>
      <FormHeader title={"login"} subtitle={"welcome back, please login."} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.emailInputWrapper}>
          <Input
            id={"email"}
            name={"email"}
            type={"email"}
            labelText="email"
            placeHolder={"Enter your email"}
            onChange={resetError}
            register={register}
            required={true}
          />
        </div>
        <div className={styles.passwordInputWrapper}>
          <Input
            id={"password"}
            name={"password"}
            type={"password"}
            labelText="password"
            placeHolder={"Enter your password"}
            register={register}
            onChange={resetError}
            required={true}
          />
        </div>
        {userExists && (
          <div className={styles.error}>
            Please make sure you enter correct email or password
          </div>
        )}
        <div className={cx(styles.formFooter, "heading4-alt")}>
          <Button type={"submit"} size={"large"}>
            Login
          </Button>
          <span>
            <span>{"Don't have an account ? "}</span>
            <Link
              to="/register"
              className={cx(styles.formFooterNavigationLink, "heading4-alt")}
            >
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </LoginRegistrationLayout>
  );
};
