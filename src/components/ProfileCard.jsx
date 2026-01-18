// ProfileCard.jsx - Main profile section

function ProfileCard({ profileImage, onProfileClick }) {
  return (
    <div className="bg-white rounded-lg border border-linkedin-border overflow-hidden">

      {/* Banner Image */}
      <div className="h-[200px] bg-gradient-to-r from-[#5f6f91] to-[#9cb3c9] relative">
        {/* Banner content/overlay - matches the "SHAUN LEE WEI RONG" banner style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-sm opacity-80">LinkedIn now has</p>
            <p className="text-4xl font-bold">1.3 Billion</p>
            <p className="text-lg tracking-widest">M E M B E R S</p>
          </div>
        </div>

        {/* Edit banner button */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100">
          <PencilIcon />
        </button>
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-6 relative">

        {/* Profile Picture - Clickable */}
        <div className="absolute -top-[88px] left-6 z-10">
          <button
            onClick={onProfileClick}
            className="w-[152px] h-[152px] rounded-full border-4 border-white overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Content area - starts after profile pic overlap area */}
        <div className="pt-[72px]">
          {/* Main content row: Left (name + headline) | Right (logos) */}
          <div className="flex justify-between items-start">
            {/* Left column: Name + Headline stacked */}
            <div className="flex-1 mr-4">
              <div className="flex items-center gap-2">
                <DiamondBadge />
                <h1 className="text-2xl font-semibold text-linkedin-text">Shaun Lee Wei Rong</h1>
                <VerifiedBadge />
              </div>
              {/* Headline - inside left column, next to logos */}
              <p className="text-base text-linkedin-text mt-2">
                Lead Client Solutions Manager at LinkedIn | ex-Digital Marketing Lead @ Amazon and ByteDance | Performance & Brand Marketing
              </p>
            </div>

            {/* Right column: Company logos stacked */}
            <div className="flex flex-col gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <LinkedInLogo />
                <span className="text-sm font-semibold text-linkedin-text">LinkedIn</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded flex items-center justify-center text-white text-xs font-bold">
                  JCU
                </div>
                <span className="text-sm text-linkedin-text">James Cook University</span>
              </div>
            </div>
          </div>

          {/* Location + Contact */}
          <p className="text-sm text-linkedin-textSecondary mt-2">
            Singapore · <a href="#" className="text-linkedin-blue font-semibold hover:underline">Contact info</a>
          </p>

          {/* Connections */}
          <a href="#" className="text-sm text-linkedin-blue font-semibold hover:underline mt-1 inline-block">
            500+ connections
          </a>

          {/* Action buttons */}
          <div className="flex gap-2 mt-4">
            <button className="bg-linkedin-blue text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#004182]">
              Open to
            </button>
            <button className="border border-linkedin-blue text-linkedin-blue px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-50 hover:border-2">
              Add section
            </button>
            <button className="border border-linkedin-blue text-linkedin-blue px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-50 hover:border-2">
              View my services
            </button>
            <button className="border border-linkedin-textSecondary text-linkedin-textSecondary p-2 rounded-full hover:bg-gray-100">
              <MoreIcon />
            </button>
          </div>
        </div>

        {/* Open to work card */}
        <div className="mt-4 p-3 bg-[#dde7f1] rounded-lg flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-linkedin-text">Open to work · Recruiters only</p>
            <p className="text-sm text-linkedin-textSecondary">Digital Marketing Manager, Marketing Director ...</p>
            <a href="#" className="text-sm text-linkedin-blue font-semibold hover:underline">Show details</a>
          </div>
          <button className="text-linkedin-textSecondary hover:text-linkedin-text">
            <PencilIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

// Icons
function PencilIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M21.13 2.86a3 3 0 0 0-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 0 0 0-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"/>
    </svg>
  )
}

function DiamondBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#0a66c2" d="M12 2L2 12l10 10 10-10L12 2z"/>
    </svg>
  )
}

function VerifiedBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" fill="#fff" stroke="#666" strokeWidth="1"/>
      <path fill="#666" d="M10 14.59l-2.29-2.3-1.42 1.42L10 17.41l8-8-1.41-1.41z"/>
    </svg>
  )
}

function LinkedInLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
      <path fill="#0a66c2" d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2M8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75M19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    </svg>
  )
}

export default ProfileCard
