import { useState } from 'react'
import { X, User, Heart, MessageCircle, Bell, Plus, LogOut } from 'lucide-react'

// FRONTEND-ONLY profile panel. It shows the demo session saved in
// localStorage by AuthModal (name + email only) and, from now on, the ads
// this account posts in this browser tab (App tags new ads with postedBy).
// It is NOT a real account page: nothing is sent to a server, and a real
// version needs a backend + database with a users table and an ads table.
export default function ProfilePanel({
  user, myAds, favorites, unreadMessages, unreadNotifications,
  onClose, onLogout, onShowFavorites, onShowMessages, onShowNotifications,
  onPostAd, onUpdateName, onOpenListing,
}) {
  const [name, setName] = useState(user?.name || '')
  const [saved, setSaved] = useState('')

  const saveName = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onUpdateName(name.trim())
    setSaved('Name updated in this browser.')
  }

  const initial = (user?.name || '?').trim().charAt(0).toUpperCase()

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <h2><User size={22} /> My Profile</h2>
        <p className="modal-sub">Demo profile — stored in this browser only, not on a server.</p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', margin: '8px 0 16px' }}>
          <span style={{
            width: 56, height: 56, borderRadius: '50%', background: '#E11D2E',
            color: '#fff', display: 'grid', placeItems: 'center',
            fontSize: 26, fontWeight: 800, flexShrink: 0,
          }}>{initial}</span>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{user.name}</div>
            <div style={{ color: '#666' }}>{user.email}</div>
          </div>
        </div>

        <form className="form-col" onSubmit={saveName}>
          <label>Display name
            <input value={name} onChange={(e) => { setName(e.target.value); setSaved('') }} placeholder="Your name" />
          </label>
          {saved && <p className="form-success">{saved}</p>}
          <button className="btn-red" type="submit">Save name</button>
        </form>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '20px 0' }}>
          <button className="btn-outline" onClick={onShowFavorites}><Heart size={16} /> {favorites.length} Favorite{favorites.length !== 1 ? 's' : ''}</button>
          <button className="btn-outline" onClick={onShowMessages}><MessageCircle size={16} /> Messages{unreadMessages > 0 ? ` (${unreadMessages} unread)` : ''}</button>
          <button className="btn-outline" onClick={onShowNotifications}><Bell size={16} /> Notifications{unreadNotifications > 0 ? ` (${unreadNotifications} unread)` : ''}</button>
          <button className="btn-outline" onClick={onPostAd}><Plus size={16} /> Post an Ad</button>
        </div>

        <h3 style={{ marginTop: 8 }}>My Ads ({myAds.length})</h3>
        {myAds.length === 0 ? (
          <p className="empty">
            No ads posted from this account yet in this browser tab.
            Ads posted before this update were not tagged with an account, so they cannot be
            claimed retroactively — post a new ad and it will appear here.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {myAds.map((ad) => (
              <button key={ad.id} className="btn-outline" style={{ textAlign: 'left' }} onClick={() => onOpenListing(ad)}>
                <strong>{ad.title}</strong>
                <span style={{ display: 'block', fontWeight: 400 }}>{ad.price} • {ad.location} • {ad.time}</span>
              </button>
            ))}
          </div>
        )}

        <button className="btn-outline full" style={{ marginTop: 20, width: '100%' }} onClick={() => { onLogout(); onClose() }}>
          <LogOut size={16} /> Log out
        </button>
        <p className="demo-note">
          <strong>Honest note:</strong> This is frontend-only demo data. For a real profile page you need a backend
          (for example Firebase Auth + Firestore or Supabase Auth + Postgres) so your name, ads and
          favorites follow you to another device or browser.
        </p>
      </div>
    </div>
  )
}
