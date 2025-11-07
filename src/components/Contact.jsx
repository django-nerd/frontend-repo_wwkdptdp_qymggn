import React from 'react';
import { Mail, Phone, Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">
          For collaborations, commissions, or inquiries, feel free to reach out directly using any of the links below.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 rounded-md border border-white/20 p-4 transition-colors hover:bg-white hover:text-black"
          >
            <Mail size={18} />
            <span className="text-sm">your.email@example.com</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-3 rounded-md border border-white/20 p-4 transition-colors hover:bg-white hover:text-black"
            target="_blank" rel="noreferrer"
          >
            <Phone size={18} />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/yourhandle"
            className="flex items-center gap-3 rounded-md border border-white/20 p-4 transition-colors hover:bg-white hover:text-black"
            target="_blank" rel="noreferrer"
          >
            <Instagram size={18} />
            <span className="text-sm">Instagram</span>
          </a>
          <a
            href="https://www.fiverr.com/yourhandle"
            className="flex items-center gap-3 rounded-md border border-white/20 p-4 transition-colors hover:bg-white hover:text-black"
            target="_blank" rel="noreferrer"
          >
            <MessageSquare size={18} />
            <span className="text-sm">Fiverr</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
