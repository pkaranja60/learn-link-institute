import { CheckCircle2 } from "lucide-react";

export function ContactSuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <CheckCircle2 className="h-10 w-10" />
      </div>
      <h3 className="mt-4 font-bold text-2xl text-foreground">
        Message Sent Successfully!
      </h3>
      <p className="mt-2 max-w-md text-muted-foreground text-sm leading-relaxed">
        Thank you for contacting Perk Group Africa. Our team will review your
        inquiry and get back to you within 24 business hours.
      </p>
      <button
        className="mt-6 rounded-md bg-primary px-6 py-2.5 font-semibold text-primary-foreground text-sm hover:bg-primary/90"
        onClick={onReset}
        type="button"
      >
        Send Another Message
      </button>
    </div>
  );
}
