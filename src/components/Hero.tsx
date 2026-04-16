import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Trusted by 500+ Chiropractic Practices
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight mb-6">
            <span className="block text-white">The Complete Platform</span>
            <span className="block text-gradient-gold">
              for Modern Chiropractors
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
            Streamline your practice with advanced DICOM imaging, intelligent
            patient management, AI-powered SOAP notes, and seamless scheduling.
            All in one powerful solution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-navy-950 font-semibold text-lg rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/20 hover:scale-105"
            >
              Book a Demo
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              See Features
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { icon: '🔬', label: 'DICOM Imaging' },
              { icon: '🤖', label: 'AI-Powered Notes' },
              { icon: '📅', label: 'Smart Scheduling' },
              { icon: '💳', label: 'Automated Billing' },
              { icon: '🔒', label: 'HIPAA Compliant' },
            ].map((feature) => (
              <div
                key={feature.label}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-colors"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-sm text-gray-300">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Preview Placeholder */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <div className="glass rounded-2xl p-2 glow-gold">
              <div className="bg-navy-800 rounded-xl aspect-video flex items-center justify-center border border-white/5">
                {/* Placeholder for software screenshot */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold/20 to-cyan/20 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-lg">
                    ChiroView Pro Dashboard Preview
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    See the full interface during your demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
