import { useState } from 'react'
import { Bell, MessageCircle, Heart, Menu, X, Plus, ChevronDown, Globe } from 'lucide-react'
import { CATEGORIES } from '../data/listings.js'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQs', href: '#faq' },
]

export default function Header({ favCount, onCategory, onPostAd, activeCategory, onNotifications, onMessages, onFavorites, onLogin, onRegister, user, onLogout, unreadNotifications, unreadMessages, onToast }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('EN')
  const closeMenu = () => setMenuOpen(false)
  const go = (href) => { closeMenu(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <header className="site-header" id="home">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-links">
            <a href="#footer">About DubaiZA</a><a href="#footer">Advertising</a><a href="#footer">Business</a>
          </div>
          <div className="top-links">
            <div className="lang-wrap">
              <button type="button" className="lang-btn" onClick={() => setLangOpen(!langOpen)}><Globe size={14} /> {lang} <ChevronDown size={13} /></button>
              {langOpen && (
                <div className="lang-menu">
                  <button type="button" onClick={() => { setLang('EN'); setLangOpen(false) }}>English</button>
                  <button type="button" onClick={() => { setLang('AR'); setLangOpen(false); onToast?.('Arabic language (demo — UI stays in English)') }}>Arabic (العربية)</button>
                </div>
              )}
            </div>
            <span>UAE</span>
          </div>
        </div>
      </div>

      <div className="mainbar">
        <div className="container mainbar-inner">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); onCategory('All'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <span className="logo-mark">D</span>
            <span><span className="logo-text">Dubai<span>ZA</span></span><span className="logo-tag">BUY &amp; SELL IN UAE</span></span>
          </a>
          <nav className="main-nav">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className={n.label === 'FAQs' ? 'nav-red' : ''} onClick={(e) => { e.preventDefault(); go(n.href) }}>{n.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" title="Notifications" onClick={onNotifications}><Bell size={19} />{unreadNotifications > 0 && <span className="badge">{unreadNotifications}</span>}</button>
            <button className="icon-btn" title="Messages" onClick={onMessages}><MessageCircle size={19} />{unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}</button>
            <button className="icon-btn" title="Favorites" onClick={onFavorites}><Heart size={19} />{favCount > 0 && <span className="badge">{favCount}</span>}</button>
            {user ? (
              <span className="login-link">Hi, {user.name} <button className="link-btn" onClick={onLogout}>Log out</button></span>
            ) : (
              <span className="login-link">
                <button className="link-btn" onClick={onLogin}>Log in</button>
                <span> | </span>
                <button className="link-btn" onClick={onRegister}>Register</button>
              </span>
            )}
            <button className="btn-red post-ad-btn" onClick={onPostAd}><Plus size={17} /> Post Ad</button>
            <button className="icon-btn hamburger" title="Menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
      </div>

      <nav className="catnav">
        <div className="container catnav-inner">
          <button className={activeCategory === 'All' ? 'cat-btn active' : 'cat-btn'} onClick={() => onCategory('All')}>All <ChevronDown size={13} /></button>
          {CATEGORIES.map((c) => (
            <button key={c} className={activeCategory === c ? 'cat-btn active' : 'cat-btn'} onClick={() => onCategory(c)}>{c} <ChevronDown size={13} /></button>
          ))}
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <nav>
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={(e) => { e.preventDefault(); go(n.href) }}>{n.label}</a>
            ))}
          </nav>
          <div className="mobile-menu-cats">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => { onCategory(c); closeMenu() }}>{c}</button>
            ))}
          </div>
          <div className="mobile-menu-actions">
            {user ? (
              <button className="btn-outline" onClick={() => { onLogout(); closeMenu() }}>Log out ({user.name})</button>
            ) : (
              <>
                <button className="btn-outline" onClick={() => { onLogin(); closeMenu() }}>Log in</button>
                <button className="btn-outline" onClick={() => { onRegister(); closeMenu() }}>Register</button>
              </>
            )}
            <button className="btn-red" onClick={() => { onPostAd(); closeMenu() }}><Plus size={17} /> Post Ad</button>
          </div>
        </div>
      )}
    </header>
  )
}
