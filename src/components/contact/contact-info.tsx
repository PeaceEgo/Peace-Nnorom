import { contactDetails } from "@/data/contact"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex gap-4">
          <div className="p-3 bg-accent/20 rounded-lg h-fit">
            <Icon className="text-accent" size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{label}</h3>
            {href ? (
              <a href={href} className="text-muted-foreground hover:text-accent transition-colors">
                {value}
              </a>
            ) : (
              <p className="text-muted-foreground">{value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
