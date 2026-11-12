import { Car, Building2, Briefcase, Smartphone, Cpu, Sofa, Wrench, Users, ArrowRight } from 'lucide-react'
import { CATEGORY_META } from '../data/site.js'

const ICONS = { Car, Building2, Briefcase, Smartphone, Cpu, Sofa, Wrench, Users }

export default function CategoriesSection({ onCategory, counts }) {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Browse Categories</h2>
            <p className="section-sub">Find what you need across the UAE</p>
          </div>
          <button className="view-all" onClick={() => onCategory('All')}>View All <ArrowRight size={16} /></button>
        </div>
        <div className="cat-grid">
          {CATEGORY_META.map((c) => {
            const Icon = ICONS[c.icon] || Users
            return (
              <button key={c.name} className="cat-card" onClick={() => onCategory(c.name)}>
                <span className="cat-icon"><Icon size={26} /></span>
                <strong>{c.name}</strong>
                <span className="cat-tag">{c.tagline}</span>
                <span className="cat-count">{counts?.[c.name] ?? 0} ads</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
