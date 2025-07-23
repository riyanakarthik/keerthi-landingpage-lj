import Link from "next/link"
import Image from "next/image"

export default function TermsOfServicePage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
              <p className="text-muted-foreground">Effective Date: July 23, 2025</p>
            </div>
            <div className="space-y-6 text-justify">
              <div>
                <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
                <p>By accessing or using the Keerthi Group website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">2. Use of the Website</h2>
                <p>You may use the website for lawful purposes only. You must not use it to distribute harmful content, spam, or violate any laws.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
                <p>All content on this site, including logos, text, images, and design, is the property of Keerthi Group and protected by copyright laws. You may not reproduce or distribute this content without written permission.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">4. Disclaimer</h2>
                <p>All content is provided \"as is\" without warranties. Keerthi Group does not guarantee that the website will be error-free or always available.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                <p>Keerthi Group shall not be held liable for any damages resulting from the use or inability to use the site.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
                <p>We may update these Terms at any time. Continued use of the site means you accept any changes made.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">7. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at <a href="mailto:helpdesk@keerthi.co.in" className="text-primary hover:underline">helpdesk@keerthi.co.in</a>.</p>
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
