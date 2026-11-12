import { X, Phone, MessageCircle, Heart, MapPin } from 'lucide-react'

export default function ListingModal({ item, onClose, onFav, isFav, onContact }) {
  if (!item) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <img className="detail-img" src={item.image} alt={item.title} />
        <div className="detail-meta">{item.category.toUpperCase()} • {item.time} • <MapPin size={13} /> {item.location}</div>
        <h2>{item.title}</h2>
        <p className="price large">{item.price}</p>
        <p>{item.desc || item.spec}</p>
        <p className="detail-spec">{item.spec}</p>
        <div className="detail-actions">
          <button className="btn-red" onClick={() => onContact('Call', item)}><Phone size={17} /> Call Seller</button>
          <button className="btn-outline" onClick={() => onContact('Chat', item)}><MessageCircle size={17} /> Chat</button>
          <button className="btn-outline" onClick={() => onFav(item.id)}><Heart size={17} fill={isFav ? 'currentColor' : 'none'} /> {isFav ? 'Saved' : 'Save'}</button>
        </div>
      </div>
    </div>
  )
}
