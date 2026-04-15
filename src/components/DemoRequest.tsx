'use client'

import { useState, FormEvent } from 'react'

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceSize: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // For now, just simulate submission
      // TODO: Connect to actual backend/email service
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        practiceName: '',
        practiceSize: '',
        message: '',
      })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="demo" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div>
            <span className="text-gold font-medium text-sm tracking-wider uppercase">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
              Book Your
              <span className="text-gradient-gold"> Free Demo</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              See ChiroView Pro in action with a personalized walkthrough
              tailored to your practice needs. Our team will show you exactly
              how to streamline your workflow.
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-4">
              {[
                'Personalized 30-minute demo',
                'See all features in action',
                'Get your questions answered live',
                'Custom pricing for your practice',
                'Free data migration assessment',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-gold"
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
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Form */}
          <div className="glass rounded-2xl p-8 glow-gold">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-400"
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
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-400 mb-6">
                  We&apos;ve received your request. Our team will contact you within
                  24 hours to schedule your demo.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-heading font-semibold text-white mb-6">
                  Request Your Demo
                </h3>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                      placeholder="john@practice.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Practice Name
                    </label>
                    <input
                      type="text"
                      value={formData.practiceName}
                      onChange={(e) =>
                        setFormData({ ...formData, practiceName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Smith Chiropractic"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Practice Size
                  </label>
                  <select
                    value={formData.practiceSize}
                    onChange={(e) =>
                      setFormData({ ...formData, practiceSize: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-navy-900">
                      Select your practice size
                    </option>
                    <option value="solo" className="bg-navy-900">
                      Solo Practitioner
                    </option>
                    <option value="small" className="bg-navy-900">
                      Small (2-5 practitioners)
                    </option>
                    <option value="medium" className="bg-navy-900">
                      Medium (6-15 practitioners)
                    </option>
                    <option value="large" className="bg-navy-900">
                      Large (16+ practitioners)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Anything specific you&apos;d like to see?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your current challenges..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold hover:bg-gold-light text-navy-950 font-semibold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-gold hover:underline">
                    Privacy Policy
                  </a>
                  . We&apos;ll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
