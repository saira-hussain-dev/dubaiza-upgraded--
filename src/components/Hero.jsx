import { useState } from 'react'
import { Search, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { CITIES, CATEGORIES } from '../data/listings.js'
import { EMIRATES } from '../data/site.js'

const QUICK = [
  { label: 'PROPERTY FOR RENT', scope: 'Property' },
  { label: 'PROPERTY FOR SALE', scope: 'Property' },
  { label: 'MOTORS', scope: 'Motors' },
  { label: 'JOBS', scope: 'Jobs' },
]

export default function Hero({ onSearch }) {
  const [scope, setScope] = useState('All')
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('United Arab Emirates')
  const [showAi, setShowAi] = useState(false)
  const [aiText, setAiText] = useState('')

  const cityFor = (loc) => (loc === 'United Arab Emirates' ? 'All Cities' : CITIES.includes(loc) ? loc : 'All Cities')

  const submit = (e) => {
    e.preventDefault()
    onSearch({ scope, query, city: cityFor(location) })
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
  }
  const quick = (s) => {
    setScope(s); onSearch({ scope: s, query: '', city: cityFor(location) })
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-new">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-pill"><Sparkles size={14} /> NEW GLOBAL FEATURES</span>
          <h1>Buy. Sell. <span>Thrive.</span></h1>
          <p>Join millions of verified users in United Arab Emirates. Find your next car, home, or career milestone with confidence.</p>

          <form className="search-card-new" onSubmit={submit}>
            <div className="search-fields">
              <label className="field"><MapPin size={18} />
                <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Location">
                  <option>United Arab Emirates</option>
                  {EMIRATES.map((e) => <option key={e.name}>{e.name}</option>)}
                </select>
              </label>
              <label className="field">
                <select value={scope} onChange={(e) => setScope(e.target.value)} aria-label="Category">
                  <option value="All">Choose a category</option>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="field"><Search size={18} />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search thousands of ads…" />
              </label>
              <button className="btn-red search-btn" type="submit"><Search size={18} /> Search</button>
            </div>
          </form>

          <a href="#results" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }) }}>Skip Explore <ArrowRight size={15} /></a>
          <div className="quick-pills">
            {QUICK.map((q) => <button key={q.label} type="button" onClick={() => quick(q.scope)}>{q.label}</button>)}
          </div>

          <div className="ai-strip">
            <span>Not sure what you want? Let AI help.</span>
            <button type="button" className="ai-link" onClick={() => setShowAi(!showAi)}>Ask AI Assistant <ArrowRight size={15} /></button>
          </div>
          {showAi && (
            <div className="ai-box">
              <input value={aiText} onChange={(e) => setAiText(e.target.value)} placeholder="Ask AI Assistant — Describe what you need..." />
              <button type="button" className="btn-red" onClick={() => { if (aiText.trim()) { setQuery(aiText); onSearch({ scope, query: aiText, city: cityFor(location) }); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }) } }}>Ask</button>
            </div>
          )}
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" alt="Dubai skyline" />
          <div className="hero-stat"><strong>48,200+</strong><span>ads in Dubai</span></div>
          <div className="hero-stat two"><strong>7</strong><span>Emirates covered</span></div>
        </div>
      </div>
    </section>
  )
}
