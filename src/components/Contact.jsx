// components/Contact.jsx
// Contact form with validation, console logging, and WhatsApp bonus link

import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Send, MessageCircle, Mail, MapPin, CheckCircle } from 'lucide-react'

// ── Contact meta sidebar ──
const CONTACT_META = [
  { icon: <Mail size={16} />,    label: 'Email',    value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { icon: <MapPin size={16} />,  label: 'Location', value: 'San Francisco, CA', href: null },
  { icon: <MessageCircle size={16} />, label: 'WhatsApp', value: 'Chat now', href: 'https://wa.me/15551234567?text=Hi%20Alex!' },
]

export default function Contact() {
  const [ref, visible] = useInView()

  // Form state
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())                        e.name    = 'Name is required.'
    if (!form.email.trim())                       e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email))   e.email   = 'Enter a valid email.'
    if (form.message.trim().length < 10)          e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    // Clear error on change
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')

    // ── Bonus: console log + simulate API ──
    console.log('📬 Form submitted:', form)

    // Simulate async send (replace with real fetch/EmailJS/etc.)
    await new Promise(r => setTimeout(r, 1200))

    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            05 — Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-cream-50">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Sidebar ── */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-100
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            <p className="font-body text-base text-ink-600 dark:text-cream-200/70 leading-relaxed">
              Have a project in mind or just want to say hello? I'm always open
              to interesting conversations and new opportunities.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {CONTACT_META.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center
                    justify-center text-accent flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-ink-600/50 dark:text-cream-200/40
                      uppercase tracking-wider">{label}</p>
                    {href
                      ? <a href={href} target="_blank" rel="noopener noreferrer"
                          className="font-body text-sm font-medium text-ink-800 dark:text-cream-50
                            hover:text-accent transition-colors duration-200">
                          {value}
                        </a>
                      : <p className="font-body text-sm font-medium text-ink-800 dark:text-cream-50">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA button */}
            <a
              href="https://wa.me/15551234567?text=Hi%20Alex!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3
                bg-green-500 text-white rounded-full font-body text-sm font-medium
                transition-all duration-300 hover:bg-green-600 hover:shadow-lg
                hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Message on WhatsApp
            </a>
          </div>

          {/* ── Form ── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-200
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Name */}
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />

            {/* Email */}
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Message */}
            <div>
              <label className="block font-body text-xs font-medium uppercase tracking-wider
                text-ink-600 dark:text-cream-200/60 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-2xl font-body text-sm resize-none
                  bg-cream-100 dark:bg-ink-800
                  border ${errors.message ? 'border-red-400' : 'border-cream-200 dark:border-ink-700'}
                  text-ink-900 dark:text-cream-50
                  placeholder:text-ink-600/30 dark:placeholder:text-cream-200/25
                  focus:outline-none focus:border-accent
                  transition-colors duration-200`}
              />
              {errors.message && (
                <p className="font-mono text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 rounded-2xl font-body text-sm font-medium
                flex items-center justify-center gap-2
                transition-all duration-300
                ${status === 'success'
                  ? 'bg-green-500 text-white'
                  : 'bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5'
                }
                disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0`}
            >
              {status === 'loading' && (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white
                  rounded-full animate-spin" />
              )}
              {status === 'success' && <CheckCircle size={16} />}
              {status === 'idle' && <Send size={15} />}
              {status === 'loading' ? 'Sending…'
                : status === 'success' ? 'Message Sent!'
                : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="font-body text-sm text-green-500 text-center">
                Thanks! I'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// ── Reusable input field ──
function Field({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="block font-body text-xs font-medium uppercase tracking-wider
        text-ink-600 dark:text-cream-200/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-2xl font-body text-sm
          bg-cream-100 dark:bg-ink-800
          border ${error ? 'border-red-400' : 'border-cream-200 dark:border-ink-700'}
          text-ink-900 dark:text-cream-50
          placeholder:text-ink-600/30 dark:placeholder:text-cream-200/25
          focus:outline-none focus:border-accent
          transition-colors duration-200`}
      />
      {error && <p className="font-mono text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}
