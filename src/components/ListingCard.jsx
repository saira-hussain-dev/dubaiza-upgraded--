import { Heart, Phone, MessageCircle, MapPin } from 'lucide-react'

export default function ListingCard({ item, isFav, onFav, onOpen, onContact }) {
  return (
    <article className="card" onClick={() => onOpen(item)}>
      <div className="card-img">
        <img src={item.image} alt={item.title} loading="lazy" />
        {item.badge && <span className="card-badge">{item.badge}</span>}
        <button
          className={isFav ? 'heart active' : 'heart'}
          title="Add to Favorites"
          onClick={(e) => { e.stopPropagation(); onFav(item.id) }}
        ><Heart size={17} fill={isFav ? 'currentColor' : 'none'} /></button>
        <div className="card-actions">
          <button onClick={(e) => { e.stopPropagation(); onContact('Call', item) }}><Phone size={14} /> Call</button>
          <button onClick={(e) => { e.stopPropagation(); onContact('Chat', item) }}><MessageCircle size={14} /> Chat</button>
        </div>
      </div>
      <div className="card-body">
        <div className="card-meta">{item.category.toUpperCase()} • {item.time}</div>
        <h3>{item.title}</h3>
        <p className="card-spec">{item.spec} • <MapPin size={13} /> {item.location}</p>
        <p className="price">{item.price}</p>
      </div>
    </article>
  )
}
