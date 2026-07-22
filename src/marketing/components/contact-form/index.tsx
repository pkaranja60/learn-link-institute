"use client";

import React from "react";
import type { FormErrors, FormState } from "./contact-form.validation";
import { initialState, validate } from "./contact-form.validation";
import { ContactFormFields } from "./contact-form-fields";
import { ContactSuccessState } from "./contact-success-state";

export function ContactForm() {
  const [values, setValues] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const updateField = React.useCallback(
    (key: keyof FormState, value: string) => {
      setValues((prev) => {
        const nextValues = { ...prev, [key]: value };
        if (touched[key]) {
          setErrors(validate(nextValues));
        }
        return nextValues;
      });
    },
    [touched]
  );

  const handleBlur = React.useCallback(
    (key: keyof FormState) => {
      setTouched((prev) => ({ ...prev, [key]: true }));
      setErrors(validate(values));
    },
    [values]
  );

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setStatus("submitting");
        setTimeout(() => {
          setStatus("success");
        }, 1000);
      }
    },
    [values]
  );

  const handleReset = React.useCallback(() => {
    setValues(initialState);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }, []);

  if (status === "success") {
    return <ContactSuccessState onReset={handleReset} />;
  }

  return (
    <ContactFormFields
      errors={errors}
      isSubmitting={status === "submitting"}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
      updateField={updateField}
      values={values}
    />
  );
}
