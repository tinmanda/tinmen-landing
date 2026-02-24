import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-primary tracking-tight">
            Tinmen
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#apps" className="hover:text-primary transition-colors">Apps</a>
            <a href="#contributors" className="hover:text-primary transition-colors">Contributors</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tight leading-tight">
            Homemade food,<br />delivered fresh
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
            Connecting home chefs with hungry neighbors. Fresh, authentic meals made with love — right to your door.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-text-tertiary">
          Tinmen &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default App
