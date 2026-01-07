export default function ContactPage() {
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-8">
          I'd love to hear from you! Whether you have a question, opportunity, or just want to connect.
        </p>

        <div className="space-y-6">
          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <a
              href="mailto:miruna.ndelcu@example.com"
              className="text-primary hover:underline"
            >
              miruna.ndelcu@example.com
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Best for detailed inquiries and professional opportunities
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/mirunaen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/mirunaen
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Let's connect professionally
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Response Time</h2>
            <p className="text-muted-foreground">
              I typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
