import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react'

const SOCIALS = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube']

export default function Footer({ onToast }) {
  const demo = (label) => (e) => { e.preventDefault(); onToast?.(`${label} (demo — link not connected yet)`) }
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo"><span className="logo-mark">D</span><span className="logo-text">Dubai<span>ZA</span></span></div>
          <p className="footer-tag">The UAE&apos;s most trusted marketplace. Whether you&apos;re buying your first car, finding your dream home, or looking for a new job, we make it safe and easy.</p>
          <p className="footer-contact"><MapPin size={14} /> Dubai, United Arab Emirates<br /><Phone size={14} /> +92-3475076194<br /><Mail size={14} /> hello@dubaiza.com</p>
          <div className="social-row">
            {SOCIALS.map((s) => (
              <button key={s} type="button" title={s} onClick={demo(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#footer" onClick={demo('About Us')}>About Us</a><a href="#footer" onClick={demo('Careers')}>Careers</a><a href="#footer" onClick={demo('Press & News')}>Press &amp; News</a><a href="#footer" onClick={demo('Sell Online')}>Sell Online In</a><a href="#footer" onClick={demo('Business')}>Business</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#footer" onClick={demo('Contact Us')}>Contact Us</a><a href="#footer" onClick={demo('How to Sell')}>How to Sell</a><a href="#footer" onClick={demo('How to Buy')}>How to Buy</a><a href="#blog" onClick={(e) => { e.preventDefault(); document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }) }}>Our Blogs</a><a href="#footer" onClick={demo('Subscription')}>Subscription</a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) }}>Help Center</a><a href="#footer" onClick={demo('Safety Guidelines')}>Safety Guidelines</a><a href="#results" onClick={(e) => { e.preventDefault(); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }) }}>Dubai</a><a href="#emirates" onClick={(e) => { e.preventDefault(); document.getElementById('emirates')?.scrollIntoView({ behavior: 'smooth' }) }}>UAE</a><a href="tel:+923475076194"><Phone size={13} /> +92-3475076194</a><a href="mailto:hello@dubaiza.com"><Mail size={13} /> hello@dubaiza.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>©2026 DubaiZA. All rights reserved. The #1 Classifieds Platform in UAE.</span>
          <span><a href="#footer" onClick={demo('Sitemap')}>Sitemap</a> • <a href="#footer" onClick={demo('Privacy Policy')}>Privacy</a> • <a href="#footer" onClick={demo('Terms')}>Terms</a> • <a href="#footer" onClick={demo('Refund Policy')}>Refund Policy</a> • <a href="#faq">FAQs</a> • <Globe size={13} /> English (UAE) <ArrowUpRight size={13} /></span>
        </div>
      </div>
    </footer>
  )
}
