import { useState } from 'react'
import { X } from 'lucide-react'

// FRONTEND-ONLY chat interface. Messages are kept in React state only.
// For real messaging you need a backend: a database table for conversations/messages,
// a WebSocket or realtime service, and login so each user only sees their own chats.
export default function MessagesPanel({ conversations, onClose, onSend, activeId, setActiveId }) {
  const [draft, setDraft] = useState('')
  const active = conversations.find((c) => c.id === activeId) || conversations[0]

  const send = (e) => {
    e.preventDefault()
    if (!draft.trim() || !active) return
    onSend(active.id, draft.trim())
    setDraft('')
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal wide chat-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <h2>Messages</h2>
        <p className="modal-sub">Demo chat — messages stay in this browser tab and are not sent to another person.</p>

        {conversations.length === 0 ? (
          <p className="empty">No conversations yet. Click Chat on any listing to start one.</p>
        ) : (
          <div className="chat-layout">
            <div className="chat-list">
              {conversations.map((c) => (
                <button key={c.id} className={active?.id === c.id ? 'chat-item active' : 'chat-item'} onClick={() => setActiveId(c.id)}>
                  <strong>{c.name}</strong>
                  <span>{c.listing}</span>
                  <span className="chat-preview">{c.messages[c.messages.length - 1]?.text || ''}</span>
                  {c.unread > 0 && <span className="badge inline">{c.unread}</span>}
                </button>
              ))}
            </div>
            <div className="chat-window">
              {active ? (
                <>
                  <div className="chat-header"><strong>{active.name}</strong><span>{active.listing}</span></div>
                  <div className="chat-messages">
                    {active.messages.map((m) => (
                      <div key={m.id} className={m.from === 'me' ? 'bubble me' : 'bubble them'}>{m.text}</div>
                    ))}
                  </div>
                  <form className="chat-form" onSubmit={send}>
                    <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a message..." />
                    <button className="btn-red" type="submit">Send</button>
                  </form>
                </>
              ) : <p className="empty">Select a conversation.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
