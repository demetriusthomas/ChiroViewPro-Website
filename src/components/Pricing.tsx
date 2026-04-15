import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For solo practitioners getting started',
    features: [
      'Up to 100 patients',
      'Basic scheduling',
      'SOAP notes',
      'Invoice generation',
      'Email support',
    ],
    cta: 'Book a Demo',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing practices',
    features: [
      'Unlimited patients',
      'Advanced scheduling',
      'SOAP notes with AI assist',
      'Invoice & payments',
      'DICOM image management',
      'SMS reminders',
      'Priority support',
    ],
    cta: 'Book a Demo',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For multi-location practices',
    features: [
      'Everything in Professional',
      'Multi-practitioner support',
      'Custom branding',
      'Advanced analytics',
      'HIPAA compliance tools',
      'API access',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-navy-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Simple Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Choose the Right Plan
            <span className="text-gradient-gold"> for Your Practice</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Transparent pricing with no hidden fees. All plans include free
            onboarding and data migration support.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-b from-gold/10 to-transparent border-2 border-gold/30 glow-gold'
                  : 'glass hover:bg-white/5'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gold text-navy-950 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <svg
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.popular ? 'text-gold' : 'text-cyan'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#demo"
                className={`block w-full py-3 text-center font-semibold rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-gold hover:bg-gold-light text-navy-950'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
