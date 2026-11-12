import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { FAQS } from '../data/site.js'

export default function FaqSection({ onContact }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">NAVIGATING</p>
            <h2>Quick Answers to Your Queries</h2>
            <p className="section-sub">How can we help?</p>
          </div>
        </div>
        <div className="faq-layout">
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
                <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{f.q}</span>
                  <ChevronDown size={18} className="faq-chev" />
                </button>
                {open === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
          <aside className="faq-help">
            <HelpCircle size={32} />
            <h3>Still need help?</h3>
            <p>Our support team is happy to help with buying, selling or your account.</p>
            <button className="btn-red" onClick={onContact}><MessageCircle size={17} /> Contact Support</button>
            <p className="faq-contact">hello@dubaiza.com<br />+92-3475076194</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
