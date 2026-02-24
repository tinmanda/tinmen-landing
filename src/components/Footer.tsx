export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              Tinmen
            </span>
            <p className="mt-3 text-sm leading-relaxed text-warm-500">
              Homemade food, delivered fresh. Connecting home chefs with hungry
              neighbors.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-warm-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#for-chefs"
                  className="hover:text-white transition-colors"
                >
                  For Chefs
                </a>
              </li>
              <li>
                <a
                  href="#for-delivery"
                  className="hover:text-white transition-colors"
                >
                  For Delivery
                </a>
              </li>
              <li>
                <a
                  href="#contributors"
                  className="hover:text-white transition-colors"
                >
                  Contributors
                </a>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="text-sm font-semibold text-warm-200 mb-4">Apps</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  Tinmen (Buyers)
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  Tinmen Kitchen
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  Tinmen Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-warm-200 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-800 pt-8 text-center text-sm text-warm-600">
          Tinmen &copy; {new Date().getFullYear()}. Made with love by the
          community.
        </div>
      </div>
    </footer>
  );
}
