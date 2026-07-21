"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";

interface FormState {
  email: string;
  message: string;
  name: string;
  phone: string;
  subject: string;
}

const initialState: FormState = {
  email: "",
  message: "",
  name: "",
  phone: "",
  subject: "",
};

const subjectOptions = [
  { label: "Course Enrollment", value: "course-enrollment" },
  { label: "In-House Training", value: "in-house-training" },
  { label: "Consultancy Services", value: "consultancy" },
  { label: "Partnership Inquiry", value: "partnership" },
  { label: "Something Else", value: "other" },
];

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()0-9\s-]{7,20}$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.subject) {
    errors.subject = "Please select a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [, setTouched] = React.useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const updateField = React.useCallback(
    (key: keyof FormState, value: string) => {
      setValues((prev) => {
        const nextValues = { ...prev, [key]: value };
        setTouched((prevTouched) => {
          if (prevTouched[key]) {
            setErrors(validate(nextValues));
          }
          return prevTouched;
        });
        return nextValues;
      });
    },
    []
  );

  const handleBlurEvent = React.useCallback((key: keyof FormState) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setValues((prev) => {
      setErrors(validate(prev));
      return prev;
    });
  }, []);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateField(e.target.name as keyof FormState, e.target.value);
    },
    [updateField]
  );

  const handleInputBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      handleBlurEvent(e.target.name as keyof FormState);
    },
    [handleBlurEvent]
  );

  const handleSubjectChange = React.useCallback(
    (v: string) => updateField("subject", v),
    [updateField]
  );

  const handleSubjectBlur = React.useCallback(
    () => handleBlurEvent("subject"),
    [handleBlurEvent]
  );

  const handleReset = React.useCallback(() => {
    setStatus("idle");
  }, []);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setTouched({
        email: true,
        message: true,
        name: true,
        phone: true,
        subject: true,
      });

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      setStatus("submitting");
      // Frontend-only demo: simulate a submission delay. Wire this up to your
      // backend or form service of choice when one is available.
      window.setTimeout(() => {
        setStatus("success");
        setValues(initialState);
        setTouched({});
        setErrors({});
      }, 900);
    },
    [values]
  );

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-10 text-center"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 aria-hidden="true" className="h-7 w-7" />
        </span>
        <h3 className="font-semibold text-foreground text-lg">Message Sent</h3>
        <p className="max-w-sm text-muted-foreground text-sm">
          Thank you for reaching out. This is a placeholder confirmation —
          connect this form to a real backend or form service to receive live
          submissions.
        </p>
        <Button onClick={handleReset} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            autoComplete="name"
            id="name"
            name="name"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            placeholder="Jane Doe"
            value={values.name}
          />
          {!!errors.name && (
            <p className="font-medium text-destructive text-xs" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            autoComplete="email"
            id="email"
            name="email"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            placeholder="jane@example.com"
            type="email"
            value={values.email}
          />
          {!!errors.email && (
            <p
              className="font-medium text-destructive text-xs"
              id="email-error"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone Number (optional)</Label>
          <Input
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            autoComplete="tel"
            id="phone"
            name="phone"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            placeholder="+254 700 000 000"
            type="tel"
            value={values.phone}
          />
          {!!errors.phone && (
            <p
              className="font-medium text-destructive text-xs"
              id="phone-error"
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Select onValueChange={handleSubjectChange} value={values.subject}>
            <SelectTrigger
              aria-describedby={errors.subject ? "subject-error" : undefined}
              aria-invalid={!!errors.subject}
              id="subject"
              onBlur={handleSubjectBlur}
            >
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {subjectOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {!!errors.subject && (
            <p
              className="font-medium text-destructive text-xs"
              id="subject-error"
            >
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          id="message"
          name="message"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          placeholder="Tell us about your training needs..."
          rows={6}
          value={values.message}
        />
        {!!errors.message && (
          <p
            className="font-medium text-destructive text-xs"
            id="message-error"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        className={cn("w-full sm:w-fit")}
        disabled={status === "submitting"}
        size="lg"
        type="submit"
      >
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />{" "}
            Sending...
          </>
        ) : (
          <>
            <Send aria-hidden="true" className="h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}
