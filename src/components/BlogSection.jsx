import { Clock, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../data/site.js'

// Demo only: cards show a short original excerpt. There is no full article
// page yet — that needs a backend / CMS. Clicking shows a toast (passed in).
export default function BlogSection({ onRead }) {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Our Blog</h2>
            <p className="section-sub">Guides for buying, selling and living in the UAE</p>
          </div>
        </div>
        <div className="blog-grid">
          {BLOG_POSTS.map((p) => (
            <article className="card blog-card" key={p.id} onClick={() => onRead(p)}>
              <div className="card-img"><img src={p.image} alt={p.title} loading="lazy" /><span className="card-badge">{p.category.toUpperCase()}</span></div>
              <div className="card-body">
                <div className="card-meta"><Clock size={13} /> {p.readTime}</div>
                <h3>{p.title}</h3>
                <p className="card-spec">{p.excerpt}</p>
                <span className="blog-link">Read Article <ArrowRight size={15} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
