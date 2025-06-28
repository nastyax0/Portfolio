"use client";
import { useState } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Oops – something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - persuasive */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-purple-800">
            Get a Customized Plan & Video Call
          </h2>
          <p className="text-gray-600">
            Fill in your name and email, and I'll send a tailored plan + link to
            book your slot.
          </p>
          <mark className="bg-purple-100 text-gray-500 italic">
            I respond to every email within 24 hours—no bots.
          </mark>
        </div>

        {/* Right side - form or scheduler */}
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-medium transition ${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                } text-white`}
              >
                {loading ? "Submitting..." : "Next: Book a Time"}
              </button>
            </form>
          ) : (
            <div id="scheduler" className="mt-8">
              <CalendlyEmbed url="https://calendly.com/anastasiadev464/30min" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
