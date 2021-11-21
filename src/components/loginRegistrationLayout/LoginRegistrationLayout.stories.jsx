import React from "react";
import LoginRegistrationLayout from "./LoginRegistrationLayout";
import FormHeader from "./FormHeader";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / LoginRegistrationLayout",
  component: LoginRegistrationLayout,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <LoginRegistrationLayout>
      {
        <FormHeader
          title={text("Form Title", "register")}
          subtitle={text("Subtitle", "lets get you on board")}
        />
      }
    </LoginRegistrationLayout>
  );
};
