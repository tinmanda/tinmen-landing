import { asset } from "@/utils/asset";

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-400 pt-16 md:pt-20 pb-16 md:pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={asset("images/apps/tinmen-user.png")}
                alt="Tinmen"
                className="w-9 h-9 rounded-xl"
                loading="lazy"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Tinmen
              </span>
            </div>
            <p className="text-sm leading-relaxed text-warm-500">
              Homemade food, delivered fresh. Connecting home chefs with the
              neighborhood.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-warm-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#for-chefs", label: "For Chefs" },
                { href: "#for-delivery", label: "For Delivery" },
                { href: "#contributors", label: "Contributors" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="text-sm font-semibold text-warm-200 mb-4">Apps</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://apps.apple.com/us/app/tinmen/id6755972405" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Tinmen (Buyers)
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/tinmen-kitchen/id6758913720" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Tinmen Kitchen
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/tinmen-delivery/id6758910469" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Tinmen Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-warm-200 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
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
