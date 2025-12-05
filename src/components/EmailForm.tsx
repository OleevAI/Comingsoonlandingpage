import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";

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
        className="max-w-md mx-auto"
      >
        {/* BLOCK 1: THE INPUTS (We use 'hidden' class instead of removing from DOM) */}
        <div className={submitted ? "hidden" : "flex flex-col sm:flex-row gap-3"}>
            <Input
              type="email"
              name="entry.1948858296"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 group"
            >
              Notify Me
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>

        {/* BLOCK 2: THE SUCCESS MESSAGE (Only visible when submitted is true) */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-3 px-6"
          >
            <Check className="size-5" />
            <span>Success! You're on the list</span>
          </motion.div>
        )}
      </form>
    </>
  );
}