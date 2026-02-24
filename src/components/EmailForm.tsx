import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // We just update the state to show the success message.
    // The form submission happens automatically via HTML attributes.
    setSubmitted(true);
  };

  return (
    <>
      <iframe
        name="hidden_iframe"
        style={{ display: 'none' }}
        title="hidden_iframe"
      />
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfGLPMGwwaeYy6jyojORbF9x0Ox0U4S7HHW6M5q11xPL0C30A/formResponse"
        target="hidden_iframe"
        method="POST"
        onSubmit={handleSubmit}
        className="w-full"
      >
        {/* BLOCK 1: THE INPUTS (We use 'hidden' class instead of removing from DOM) */}
        <div className={submitted ? "hidden" : "flex flex-col gap-6"}>
          <div className="relative">
            <input
              type="email"
              name="entry.1948858296"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-lg border border-[rgba(45,45,45,0.2)] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.6)] focus:outline-none focus:border-[rgba(45,45,45,0.4)] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#121d32] text-white px-8 py-3 rounded-lg hover:bg-[#1a2a47] transition-colors"
          >
            Notify Me
          </button>
        </div>

        {/* BLOCK 2: THE SUCCESS MESSAGE (Only visible when submitted is true) */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg py-4 px-6"
          >
            <Check className="size-5" />
            <span>Success! You're on the list</span>
          </motion.div>
        )}
      </form>
    </>
  );
}