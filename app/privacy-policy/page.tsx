import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-black text-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center space-x-2">
          <Image src="/logo.png" width={60} height={32} alt="Keerthi Group Logo" className="h-8 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/#divisions" className="text-sm font-medium hover:underline underline-offset-4">Divisions</Link>
          <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <Link href="/#leadership" className="text-sm font-medium hover:underline underline-offset-4">Leadership</Link>
          <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground">Effective Date: July 23, 2025</p>
            </div>
            <div className="space-y-6 text-justify">
              <div>
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>This Privacy Policy explains how Keerthi Group collects, uses, and protects your information when you use our website.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Contact details (name, email) submitted via forms</li>
                  <li>Browser and usage data via analytics tools</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                <ul className="list-disc ml-6 space-y-1">
                  <li>To respond to inquiries</li>
                  <li>To improve our website and services</li>
                  <li>To contact you with relevant updates (with consent)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">4. Information Sharing</h2>
                <p>We do not sell or share your personal data with third parties unless required by law.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">5. Data Security</h2>
                <p>We implement reasonable safeguards to protect your data but cannot guarantee absolute security.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">6. Cookies</h2>
                <p>We may use cookies to enhance user experience. You can disable cookies in your browser settings.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">7. Your Rights</h2>
                <p>You may request access, correction, or deletion of your personal data by contacting us.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
                <p>We may update this policy periodically. Continued use of our site means you agree to the updated policy.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">9. Contact Us</h2>
                <p>For privacy-related questions, email us at <a href="mailto:helpdesk@keerthi.co.in" className="text-primary hover:underline">helpdesk@keerthi.co.in</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black text-white">
        <p className="text-xs text-justify text-muted-foreground">© {new Date().getFullYear()} KEERTHI GROUP. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4">Privacy Policy</Link>
        </nav>
      </footer>
    </>
  )
}
