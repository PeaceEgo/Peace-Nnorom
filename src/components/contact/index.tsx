"use client"

import { useSectionInView } from "@/hooks/use-section-in-view"
import SectionHeader from "@/components/ui/section-header"
import ContactInfo from "./contact-info"
import ContactForm from "./contact-form"

export default function Contact() {
  const { ref, isInView } = useSectionInView()

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Get in Touch"
          title="Let's"
          titleHighlight="Connect"
          description="Have a project in mind? Let's work together to bring your ideas to life."
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
