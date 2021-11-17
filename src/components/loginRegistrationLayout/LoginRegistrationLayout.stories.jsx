import React from "react";
import LoginRegistrationLayout from "./LoginRegistrationLayout";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / LoginRegistrationLayout",
  component: LoginRegistrationLayout,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <LoginRegistrationLayout
      formTitle={text("Form Title", "register")}
      formSubtitle={text("Subtitle", "lets get you on board")}
    />
  );
};
