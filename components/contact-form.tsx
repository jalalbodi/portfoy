"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Status =
  | { state: "idle"; message: "" }
  | { state: "loading"; message: "Sending..." }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message ?? "Message could not be sent.");
      }

      form.reset();
      setStatus({
        state: "success",
        message: data.message ?? "Thanks. Your message was received and logged safely.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Message could not be sent.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          className="rounded-[6px] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
          className="rounded-[6px] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={1200}
          rows={5}
          className="resize-y rounded-[6px] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
        />
      </div>

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-65"
      >
        <Send className="size-4" aria-hidden="true" />
        Send message
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-5 text-sm ${
          status.state === "error"
            ? "text-red-600 dark:text-red-300"
            : "text-[color-mix(in_srgb,var(--foreground)_70%,transparent)]"
        }`}
      >
        {status.message}
      </p>
    </form>
  );
}
