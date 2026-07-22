import { Loader2, Send } from "lucide-react";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/shared";
import type { FormErrors, FormState } from "./contact-form.validation";
import { subjectOptions } from "./contact-form.validation";

interface ContactFormFieldsProps {
  errors: FormErrors;
  isSubmitting: boolean;
  onBlur: (key: keyof FormState) => void;
  onSubmit: (e: React.FormEvent) => void;
  updateField: (key: keyof FormState, value: string) => void;
  values: FormState;
}

export function ContactFormFields({
  values,
  errors,
  isSubmitting,
  updateField,
  onBlur,
  onSubmit,
}: ContactFormFieldsProps) {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onBlur={() => onBlur("name")}
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="John Doe"
            value={values.name}
          />
          {Boolean(errors.name) && (
            <span className="text-red-500 text-xs">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onBlur={() => onBlur("email")}
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="john@example.com"
            type="email"
            value={values.email}
          />
          {Boolean(errors.email) && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input
            id="phone"
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onBlur={() => onBlur("phone")}
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="+254 700 000 000"
            value={values.phone}
          />
          {Boolean(errors.phone) && (
            <span className="text-red-500 text-xs">{errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Subject *</Label>
          <Select
            // biome-ignore lint/performance/noJsxPropsBind: field handler
            onValueChange={(val) => updateField("subject", val)}
            value={values.subject}
          >
            <SelectTrigger id="subject">
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
          {Boolean(errors.subject) && (
            <span className="text-red-500 text-xs">{errors.subject}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          // biome-ignore lint/performance/noJsxPropsBind: field handler
          onBlur={() => onBlur("message")}
          // biome-ignore lint/performance/noJsxPropsBind: field handler
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="How can we help you?"
          rows={5}
          value={values.message}
        />
        {Boolean(errors.message) && (
          <span className="text-red-500 text-xs">{errors.message}</span>
        )}
      </div>

      <Button
        className="mt-2 w-full sm:w-auto"
        disabled={isSubmitting}
        size="lg"
        type="submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}
