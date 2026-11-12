import { MapPin, ArrowRight } from 'lucide-react'
import { EMIRATES } from '../data/site.js'

export default function EmiratesSection({ onExploreEmirate }) {
  return (
    <section className="section" id="emirates">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Discover United Arab Emirates</h2>
            <p className="section-sub">Explore ads by emirate — homes, rooms and short stays</p>
          </div>
        </div>
        <div className="emirate-grid">
          {EMIRATES.map((e) => (
            <article className="emirate-card" key={e.name} onClick={() => onExploreEmirate(e.name)}>
              <div className="emirate-img"><img src={e.image} alt={e.name} loading="lazy" /><span className="emirate-count">{e.count}</span></div>
              <div className="emirate-body">
                <h3><MapPin size={16} /> {e.name}</h3>
                <ul>
                  {e.links.map((l) => (
                    <li key={l}><button type="button" onClick={(ev) => { ev.stopPropagation(); onExploreEmirate(e.name) }}>{l} <ArrowRight size={13} /></button></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
