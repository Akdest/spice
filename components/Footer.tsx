
export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-blue-100 border-t border-white/20 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 font-orbitron drop-shadow">SPICE</h3>
            <p className="mt-2 text-sm text-gray-700">
              Department of Instrumentation and Control Engineering,<br />
              Dr. B R Ambedkar National Institute of Technology, Jalandhar<br />
              Punjab - 144008
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-700 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-700 transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#upcoming-events" className="hover:text-blue-700 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-700 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact</h4>
            <p className="text-sm text-gray-700">
              Email:{' '}
              <a href="mailto:spice@nitj.ac.in" className="text-blue-600 hover:underline">
                spice@nitj.ac.in
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} SPICE | NIT Jalandhar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
