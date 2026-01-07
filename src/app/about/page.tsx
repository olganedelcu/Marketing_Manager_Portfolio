export default function AboutPage() {
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <div className="prose prose-lg">
          <p className="text-lg text-muted-foreground mb-6">
            I'm a marketing manager specializing in B2B SaaS and AI products.
            I build full-funnel marketing systems that turn cold leads into loyal users.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Experience</h2>
          <p className="text-muted-foreground mb-6">
            Add your experience details here...
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Skills</h2>
          <p className="text-muted-foreground mb-6">
            Add your skills here...
          </p>
        </div>
      </div>
    </div>
  );
}
