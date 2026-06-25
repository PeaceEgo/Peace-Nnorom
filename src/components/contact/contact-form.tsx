"use client"

import type React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"

type FormData = { name: string; email: string; message: string }

const initialForm: FormData = { name: "", email: "", message: "" }

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const updateField = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Failed to send message")

      setSubmitted(true)
      setFormData(initialForm)
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {(["name", "email"] as const).map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium mb-2 capitalize">{field}</label>
          <input
            type={field === "email" ? "email" : "text"}
            value={formData[field]}
            onChange={updateField(field)}
            className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            placeholder={field === "email" ? "your@email.com" : "Your name"}
            required
            disabled={isSubmitting}
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={updateField("message")}
          className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Your message..."
          rows={4}
          required
          disabled={isSubmitting}
        />
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      {submitted && (
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-600 text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full px-6 py-3 bg-gradient-to-r from-accent to-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : submitted ? (
          "Message Sent!"
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
