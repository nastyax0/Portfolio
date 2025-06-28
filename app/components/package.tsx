export default function Agreement() {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-12">Packages</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Essentials Plan */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow hover:shadow-xl hover:scale-[1.03] transition-transform bg-white">
          <h3 className="text-2xl font-semibold mb-4">Essentials – $100/mo</h3>
          <p className="text-gray-600 mb-6">
            A reliable, professional online presence for small businesses.
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside text-left">
            <li>Up to 3 well-designed pages</li>
            <li>Responsive layout (mobile/tablet optimized)</li>
            <li>Contact Form with spam protection</li>
            <li>Fast load time optimization</li>
            <li>Free Bug Fixes & Maintenance</li>
          </ul>
          <a href="/#contact">
            <button className="mt-6 w-full py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300">
              Select Essentials
            </button>
          </a>
        </div>

        {/* Premium Plan */}
        <div className="border-2 border-purple-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.04] transition-transform bg-purple-50">
          <h3 className="text-3xl font-bold mb-4">Premium – $180/mo</h3>
          <p className="text-gray-700 mb-6">
            Strategic branding and advanced functionality for scaling
            businesses.
          </p>
          <ul className="space-y-2 text-gray-800 list-disc list-inside text-left">
            <li>Everything in Essentials</li>
            <li>Up to 6 custom-designed pages</li>
            <li>Brand color palette & typography integration</li>
            <li>Smooth UI animations & interactions</li>
            <li>Basic SEO Setup</li>
            <li>Performance enhancements</li>
            <li>Onboarding Consultation</li>
          </ul>
          <a href="/#contact">
            <button className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
              Select Premium
            </button>
          </a>
        </div>
      </div>

      {/* Add-ons */}
      <div className="max-w-4xl mx-auto mt-20 px-6 text-left text-gray-800">
        <div className="bg-white rounded-xl border shadow p-8">
          <h3 className="text-2xl font-semibold mb-4 relative inline-block w-fit">
            <span className="relative z-10">Additional Services & Add‑ons</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-purple-200 rotate-[2deg] z-0"></span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
            <li>
              Consultation, Bugs & Repairs —{" "}
              <span className="text-green-600 font-medium">Free</span>
            </li>
            <li>
              Extra Pages — <span className="text-gray-500">as per work</span>
            </li>
            <li>
              Hosting Setup — <span className="text-gray-500">$20</span>
            </li>
            <li>
              Basic SEO Setup — <span className="text-gray-500">$30</span>
            </li>
            <li>
              Monthly Maintenance —{" "}
              <span className="text-gray-500">$25/mo</span>
            </li>
            <li>
              SSL & Basic Security Setup —{" "}
              <span className="text-gray-500">$15</span>
            </li>
            <li>
              Custom Fonts + Brand Colors —{" "}
              <span className="text-gray-500">$10</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Terms */}
      <div className="max-w-3xl mx-auto mt-24 space-y-8 text-left text-gray-700">
        <p className="text-lg">
          <strong>Payment Terms:</strong> I ask for a 50% upfront payment after
          we chat and confirm the project — it locks in your spot and helps me
          plan my schedule. The rest is due when your shiny new site is ready to
          launch.
        </p>
        <p className="text-lg">
          <strong>Getting Started:</strong> To make sure I really understand
          your vision, I have a quick form you can fill out. It helps me plan
          things out and give you an accurate quote.
        </p>
        <p className="text-lg">
          <strong>Expectations:</strong> I prioritize clear communication,
          realistic timelines, and accountability. You’ll receive a live demo
          link to track progress. I don’t allow scope creep or micromanagement —
          everything agreed upon is honored, and I ensure all deliverables are
          completed professionally.
        </p>
        <p className="text-lg">
          This agreement helps protect both our time and energy, and sets the
          stage for a smooth, collaborative experience.
        </p>
      </div>
    </section>
  );
}
