// Header.jsx - LinkedIn navigation bar

function Header() {
  return (
    <header className="bg-white border-b border-linkedin-border sticky top-0 z-50">
      <div className="max-w-[1128px] mx-auto px-4 flex items-center justify-between h-[52px]">

        {/* Left: Logo + Search */}
        <div className="flex items-center gap-2">
          {/* LinkedIn Logo */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" className="w-[34px] h-[34px]">
            <path fill="#0a66c2" d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"/>
          </svg>

          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center bg-[#eef3f8] rounded px-2 py-1.5 w-[280px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 text-linkedin-textSecondary mr-1">
                <path d="M14.56 12.44 11.3 9.18a5.51 5.51 0 1 0-2.12 2.12l3.26 3.26a1.5 1.5 0 1 0 2.12-2.12M3 6.5A3.5 3.5 0 1 1 6.5 10 3.5 3.5 0 0 1 3 6.5" fill="currentColor"/>
              </svg>
              <input
                type="text"
                placeholder="I'm looking for..."
                className="bg-transparent text-sm outline-none w-full text-linkedin-text placeholder-linkedin-textSecondary"
              />
            </div>
          </div>
        </div>

        {/* Right: Navigation Icons */}
        <nav className="flex items-center gap-6">
          <NavItem icon={<HomeIcon />} label="Home" active hasNotification />
          <NavItem icon={<NetworkIcon />} label="My Network" />
          <NavItem icon={<JobsIcon />} label="Jobs" />
          <NavItem icon={<MessagingIcon />} label="Messaging" />
          <NavItem icon={<NotificationsIcon />} label="Notifications" notificationCount={2} />
          <NavItem icon={<MeIcon />} label="Me" hasDropdown />

          <div className="border-l border-linkedin-border h-[40px] mx-2" />

          <NavItem icon={<GridIcon />} label="For Business" hasDropdown />
          <NavItem icon={<RecruiterIcon />} label="Recruiter" isText />
        </nav>
      </div>
    </header>
  )
}

// NavItem component for each navigation button
function NavItem({ icon, label, active, hasNotification, notificationCount, hasDropdown, isText }) {
  return (
    <button className={`flex flex-col items-center justify-center min-w-[60px] h-[52px] relative hover:text-linkedin-text ${active ? 'text-linkedin-text' : 'text-linkedin-textSecondary'}`}>
      <div className="relative">
        {icon}
        {hasNotification && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
        {notificationCount && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
            {notificationCount}
          </span>
        )}
      </div>
      <span className="text-xs mt-0.5 flex items-center gap-0.5">
        {label}
        {hasDropdown && <DropdownArrow />}
      </span>
      {active && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linkedin-text" />}
    </button>
  )
}

// Icons
function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M23 9v2h-2v7a3 3 0 0 1-3 3h-4v-6h-4v6H6a3 3 0 0 1-3-3v-7H1V9l11-7z"/>
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 16v6H3v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3m5.5-3A3.5 3.5 0 1 0 14 9.5a3.5 3.5 0 0 0 3.5 3.5m1 2h-2a2.5 2.5 0 0 0-2.5 2.5V22h7v-4.5a2.5 2.5 0 0 0-2.5-2.5M7.5 2A4.5 4.5 0 1 0 12 6.5 4.49 4.49 0 0 0 7.5 2"/>
    </svg>
  )
}

function JobsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17 6V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6zM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm10 9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-1h14z"/>
    </svg>
  )
}

function MessagingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7m-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25m4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25m4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25"/>
    </svg>
  )
}

function NotificationsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M22 19h-8.28a2 2 0 1 1-3.44 0H2v-1a4.52 4.52 0 0 1 1.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0 1 22 18zM18.21 7.44A6.27 6.27 0 0 0 12 2a6.27 6.27 0 0 0-6.21 5.44L5 13h14z"/>
    </svg>
  )
}

function MeIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-linkedin-blue flex items-center justify-center overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 3a3.5 3.5 0 1 1-3.5 3.5A3.5 3.5 0 0 1 12 5m0 15a8 8 0 0 1-6-2.71 4.5 4.5 0 0 1 4-2.29h4a4.5 4.5 0 0 1 4 2.29A8 8 0 0 1 12 20"/>
      </svg>
    </div>
  )
}

function GridIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3 3h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4z"/>
    </svg>
  )
}

function RecruiterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 3a3.5 3.5 0 1 1-3.5 3.5A3.5 3.5 0 0 1 12 5m0 15a8 8 0 0 1-6-2.71 4.5 4.5 0 0 1 4-2.29h4a4.5 4.5 0 0 1 4 2.29A8 8 0 0 1 12 20"/>
    </svg>
  )
}

function DropdownArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
      <path d="M8 11L3 6h10z"/>
    </svg>
  )
}

export default Header
