const testimonials = [
  {
    quote:
      "ChiroView Pro transformed how we run our practice. The DICOM integration alone saved us thousands in third-party software, and our documentation time dropped by half.",
    author: 'Dr. Michael Chen',
    role: 'Chen Chiropractic Wellness',
    location: 'San Francisco, CA',
    image: null,
  },
  {
    quote:
      "The AI-powered SOAP notes are a game-changer. I used to spend hours on documentation after patient hours. Now I finish notes in real-time and go home on time.",
    author: 'Dr. Sarah Martinez',
    role: 'Family Spine & Joint Center',
    location: 'Austin, TX',
    image: null,
  },
  {
    quote:
      "We switched from a legacy system that was costing us $300/month and got better features for less. The migration support was seamless. Highly recommend.",
    author: 'Dr. James Wilson',
    role: 'Wilson Multi-Care',
    location: 'Denver, CO',
    image: null,
  },
]

const stats = [
  { value: '500+', label: 'Practices Using ChiroView Pro' },
  { value: '50,000+', label: 'Patients Managed Monthly' },
  { value: '60%', label: 'Average Time Saved on Notes' },
  { value: '99.9%', label: 'Uptime Guarantee' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Trusted by Chiropractors
            <span className="text-gradient-gold"> Nationwide</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Join hundreds of practices that have streamlined their operations
            with ChiroView Pro.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-gold/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-cyan/30 flex items-center justify-center">
                  <span className="text-lg font-semibold text-white">
                    {testimonial.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
