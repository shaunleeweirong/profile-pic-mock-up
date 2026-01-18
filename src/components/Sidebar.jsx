// Sidebar.jsx - Right sidebar with profile info and ads
import PropTypes from 'prop-types'

// Fallback image when profile image fails to load
const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Ccircle cx="12" cy="12" r="12" fill="%23e0e0e0"/%3E%3Ccircle cx="12" cy="9" r="4" fill="%23999"/%3E%3Cpath d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="%23999"/%3E%3C/svg%3E'

function Sidebar() {
  return (
    <div className="flex flex-col gap-4">

      {/* Profile Language */}
      <SidebarCard>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-linkedin-text">Profile language</h3>
          <button
            aria-label="Edit profile language"
            className="text-linkedin-textSecondary hover:text-linkedin-text"
          >
            <PencilIcon />
          </button>
        </div>
        <p className="text-sm text-linkedin-textSecondary mt-1">English</p>
      </SidebarCard>

      {/* Public Profile & URL */}
      <SidebarCard>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-linkedin-text">Public profile & URL</h3>
          <button
            aria-label="Edit public profile URL"
            className="text-linkedin-textSecondary hover:text-linkedin-text"
          >
            <PencilIcon />
          </button>
        </div>
        <p className="text-sm text-linkedin-textSecondary mt-1">www.linkedin.com/in/shaunleeweirong</p>
      </SidebarCard>

      {/* Ad Card */}
      <SidebarCard className="relative">
        <div className="flex items-center justify-between text-xs text-linkedin-textSecondary mb-2">
          <span>Promoted</span>
          <button>•••</button>
        </div>
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
            <div className="w-8 h-8 bg-linkedin-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xs">▶</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-linkedin-text">Precoro |B Corp Certified</p>
            <p className="text-xs text-linkedin-textSecondary">Follow B Corp Certified Procure-to-Pay software</p>
          </div>
        </div>
        <p className="text-xs text-linkedin-textSecondary mt-2">Data-driven procurement for sustainable operations.</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-gray-300 border border-white" />
            <div className="w-5 h-5 rounded-full bg-gray-400 border border-white" />
          </div>
          <span className="text-xs text-linkedin-textSecondary">H. Marchello & 8 other connections also follow</span>
        </div>
        <button className="w-full mt-3 py-1.5 border border-linkedin-blue text-linkedin-blue rounded-full text-sm font-semibold hover:bg-blue-50 hover:border-2">
          Follow
        </button>
      </SidebarCard>

      {/* Premium - Who also viewed */}
      <SidebarCard>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-600">📙</span>
          <span className="text-sm font-semibold text-linkedin-text">Premium</span>
        </div>
        <h3 className="text-base font-semibold text-linkedin-text">Who your viewers also viewed</h3>
        <div className="flex items-center gap-1 mt-1">
          <EyeIcon />
          <span className="text-xs text-linkedin-textSecondary">Private to you</span>
        </div>

        {/* Person suggestion */}
        <div className="flex items-start gap-3 mt-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Jeelene Ker's profile photo"
              onError={(e) => { e.target.src = FALLBACK_IMAGE }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-linkedin-text">Jeelene Ker</span>
              <LinkedInBadge />
              <span className="text-xs text-linkedin-textSecondary">· 1st</span>
            </div>
            <p className="text-xs text-linkedin-textSecondary">Senior Client Solutions Manager @ LinkedIn</p>
            <button className="mt-2 flex items-center gap-1 text-linkedin-textSecondary text-sm hover:bg-gray-100 px-3 py-1 rounded-full border border-linkedin-textSecondary">
              <MessageIcon />
              Message
            </button>
          </div>
        </div>
      </SidebarCard>
    </div>
  )
}

// Reusable card wrapper
function SidebarCard({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg border border-linkedin-border p-4 ${className}`}>
      {children}
    </div>
  )
}

SidebarCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

// Icons
function PencilIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M21.13 2.86a3 3 0 0 0-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 0 0 0-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"/>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-linkedin-textSecondary">
      <path d="M8 3C4.36 3 1.26 5.28 0 8.5c1.26 3.22 4.36 5.5 8 5.5s6.74-2.28 8-5.5C14.74 5.28 11.64 3 8 3zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>
  )
}

function LinkedInBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4">
      <path fill="#0a66c2" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5.5 12.5h-2v-6h2zm-1-7a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm8 7h-2V9.25c0-.83-.67-1.25-1.25-1.25s-1.25.58-1.25 1.42v3.08h-2v-6h2v.83a2.48 2.48 0 0 1 2-.92c1.38 0 2.5 1 2.5 2.5z"/>
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M14 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v3l4-3h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
    </svg>
  )
}

export default Sidebar
