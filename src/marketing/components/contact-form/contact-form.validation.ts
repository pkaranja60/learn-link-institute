export interface FormState {
  email: string;
  message: string;
  name: string;
  phone: string;
  subject: string;
}

export const initialState: FormState = {
  email: "",
  message: "",
  name: "",
  phone: "",
  subject: "",
};

export const subjectOptions = [
  { label: "Course Enrollment", value: "course-enrollment" },
  { label: "In-House Training", value: "in-house-training" },
  { label: "Consultancy Services", value: "consultancy" },
  { label: "Partnership Inquiry", value: "partnership" },
  { label: "Something Else", value: "other" },
];

export type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()0-9\s-]{7,20}$/;

export function validate(values: FormState): FormErrors {
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
