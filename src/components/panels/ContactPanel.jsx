import { motion as Motion } from "framer-motion";
import resume from "../../data/resume";
import GlowButton from "../GlowButton";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(serviceId, templateId, {
          from_name: name,
          reply_to: email,
          message,
          to_email: resume.email,
        }, { publicKey });
        alert("Thanks! Your message was sent successfully.");
        setName(""); setEmail(""); setMessage("");
        return;
      } catch (err) {
        console.error(err);
        alert("Sending failed via EmailJS. Falling back to your mail client.");
      }
    }

    // Fallback: open default mail client
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${resume.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Motion.div
      key="contact"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="rounded-2xl p-6 border border-cyan-500/10 bg-black/30 backdrop-blur-sm"
    >
      <h3 className="text-lg font-semibold text-cyan-200">Contact</h3>
      <form className="mt-4 grid gap-3" onSubmit={handleSend}>
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-md bg-black/20 border border-cyan-400/10 placeholder-cyan-200/60"
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md bg-black/20 border border-cyan-400/10 placeholder-cyan-200/60"
          required
        />
        <textarea
          placeholder="Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded-md bg-black/20 border border-cyan-400/10 placeholder-cyan-200/60"
          required
        />
        <div className="flex items-center justify-between">
          <GlowButton onClick={handleSend}>Send</GlowButton>
          <div className="text-xs text-cyan-200/60">
            Or ping: <a href={`mailto:${resume.email}`} className="underline">{resume.email}</a>
          </div>
        </div>
      </form>
    </Motion.div>
  );
}