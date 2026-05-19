'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', type: 'general', message: '' })
      setSubmitted(false)
    }, 4000)
  }

  const contactMethods = [
    {
      title: 'Email',
      icon: '✉️',
      description: 'For detailed inquiries',
      contact: 'hello@example.com',
      link: 'mailto:hello@example.com',
    },
    {
      title: 'Instagram',
      icon: '📷',
      description: 'For direct messages',
      contact: '@pinkandochre',
      link: '#',
    },
    {
      title: 'Pinterest',
      icon: '📌',
      description: 'For content sharing',
      contact: '@pinkandochre',
      link: '#',
    },
  ]

  const faqs = [
    {
      question: 'How quickly will you respond?',
      answer: 'I typically respond to inquiries within 24-48 hours during weekdays. For urgent matters, please mark your subject as "Urgent".',
    },
    {
      question: 'Do you accept collaboration requests?',
      answer: 'Yes! I love collaborating with brands and creators that align with my values. Please include details about your proposal in your message.',
    },
    {
      question: 'Can I feature your content on my platform?',
      answer: 'Absolutely! I appreciate attribution. Please send me the details of how you'd like to share my work, and we can discuss further.',
    },
    {
      question: 'Do you offer affiliate partnerships?',
      answer: 'Yes, I do work with select brands for affiliate partnerships. Please reach out with your proposal and details about your company.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <h1 className="heading-large mb-4">Get In Touch</h1>
          <p className="subtitle max-w-2xl">
            I'd love to hear from you. Whether you have questions, collaboration ideas, feedback, or just want to say hello—reach out!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container max-w-2xl">
          <div className="mb-12 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Get In Touch</span>
            <h2 className="heading-medium mt-4">Send a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-charcoal font-body font-semibold mb-3 tracking-wide text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-6 py-4 border border-warm-stone bg-ivory text-charcoal placeholder-taupe focus:outline-none focus:border-gold focus:bg-cream transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-charcoal font-body font-semibold mb-3 tracking-wide text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 border border-warm-stone bg-ivory text-charcoal placeholder-taupe focus:outline-none focus:border-gold focus:bg-cream transition-all"
                  required
                />
              </div>
            </div>

            {/* Subject and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-charcoal font-body font-semibold mb-3 tracking-wide text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-6 py-4 border border-warm-stone bg-ivory text-charcoal placeholder-taupe focus:outline-none focus:border-gold focus:bg-cream transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-charcoal font-body font-semibold mb-3 tracking-wide text-sm">Inquiry Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-warm-stone bg-ivory text-charcoal focus:outline-none focus:border-gold focus:bg-cream transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press/Media</option>
                  <option value="business">Business Proposal</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-charcoal font-body font-semibold mb-3 tracking-wide text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your inquiry..."
                rows={7}
                className="w-full px-6 py-4 border border-warm-stone bg-ivory text-charcoal placeholder-taupe focus:outline-none focus:border-gold focus:bg-cream transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-4 text-base font-semibold tracking-wide"
            >
              SEND MESSAGE
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="p-6 bg-ivory border-l-4 border-gold text-center rounded-sm">
                <p className="font-semibold text-charcoal text-lg">✓ Message Sent!</p>
                <p className="text-taupe mt-2 font-body">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <div className="mb-16">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Other Ways</span>
            <h2 className="heading-medium mt-4">Connect With Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                className="card-elevated p-8 text-center hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-display text-2xl text-charcoal mb-2">{method.title}</h3>
                <p className="text-taupe text-sm mb-4 font-body">{method.description}</p>
                <p className="font-semibold text-gold group-hover:text-charcoal transition">{method.contact}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container max-w-3xl">
          <div className="mb-12">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Questions</span>
            <h2 className="heading-medium mt-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-warm-stone pb-8">
                <h3 className="font-display text-xl text-charcoal mb-4">{faq.question}</h3>
                <p className="text-taupe leading-relaxed font-body">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-ivory border border-warm-stone rounded-sm">
            <h3 className="font-display text-lg text-charcoal mb-4">Didn't find what you're looking for?</h3>
            <p className="text-taupe mb-4 font-body">
              Feel free to reach out directly through the contact form above or via any of the contact methods. I read and respond to all genuine inquiries.
            </p>
            <p className="text-taupe font-body">
              For privacy concerns, please refer to our <a href="/privacy" className="text-gold hover:text-charcoal transition font-semibold">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-charcoal text-cream">
        <div className="section-container max-w-2xl text-center">
          <h2 className="heading-medium mb-6">Let's Create Something Amazing Together</h2>
          <p className="subtitle text-cream mb-10">
            Whether it's a collaboration, feedback, or just a friendly hello—I'm here and ready to connect.
          </p>
          <a href="#" onClick={() => document.querySelector('input[name="name"]')?.focus()} className="btn-primary">
            START A CONVERSATION
          </a>
        </div>
      </section>
    </>
  )
}
