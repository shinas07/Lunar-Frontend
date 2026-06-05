"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import { ButtonAction } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Web Development",
  "Web3 / Blockchain",
  "Mobile App",
  "Product Development",
  "Crypto Solutions",
  "Maintenance & Support",
  "Other",
];

const budgetOptions = ["Below ₹1L", "₹1–5L", "₹5–20L", "₹20L+", "Not sure"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        setErrorMsg(json.error ?? "Please review the highlighted fields.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Something went wrong. Please email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface/70 p-12 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
          <Check className="h-8 w-8 text-emerald-300" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-cloud">
          Inquiry received.
        </h3>
        <p className="mt-3 max-w-sm text-pretty text-mist">
          Thank you — a member of our team will respond within one business day.
          We read every message personally.
        </p>
        <ButtonAction
          variant="secondary"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </ButtonAction>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur md:p-8"
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} required>
          <input
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Email address" error={errors.email} required>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputCls(!!errors.email)}
          />
        </Field>
        <Field label="Phone number" error={errors.phone} required>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className={inputCls(!!errors.phone)}
          />
        </Field>
        <Field label="Company / Organization">
          <input
            name="company"
            type="text"
            placeholder="Your company"
            className={inputCls(false)}
          />
        </Field>
        <Field label="Area of interest">
          <select name="service" defaultValue="" className={cn(inputCls(false), "appearance-none")}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o} className="bg-surface text-cloud">
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Estimated budget">
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map((b, i) => (
              <label key={b} className="cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  defaultChecked={i === budgetOptions.length - 1}
                  className="peer sr-only"
                />
                <span className="inline-block rounded-full border border-line bg-surface px-4 py-2 text-sm text-mist transition-colors peer-checked:border-electric/50 peer-checked:bg-electric/10 peer-checked:text-electric hover:text-cloud">
                  {b}
                </span>
              </label>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message / Requirements" error={errors.message}>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className={cn(inputCls(!!errors.message), "resize-none")}
          />
        </Field>
      </div>

      <AnimatePresence>
        {status === "error" && errorMsg && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-faint">
          We&apos;ll only use your details to respond to your inquiry.
        </p>
        <ButtonAction
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send inquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </ButtonAction>
      </div>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-ink-2/60 px-4 py-3 text-cloud placeholder:text-faint transition-colors focus:outline-none focus:ring-2 focus:ring-electric/40",
    hasError ? "border-red-400/50" : "border-line focus:border-electric/50"
  );
}

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-haze">
        {label}
        {required && <span className="ml-1 text-electric">*</span>}
      </span>
      {children}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
