// ProfilePhotoModal.jsx - Profile photo popup with AI Update button

function ProfilePhotoModal({ isOpen, onClose, profileImage, onAIUpdate }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-[700px] max-w-[90vw] max-h-[90vh] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-linkedin-border">
          <h2 className="text-xl font-semibold text-linkedin-text">Profile photo</h2>
          <button
            onClick={onClose}
            className="text-linkedin-textSecondary hover:text-linkedin-text hover:bg-gray-100 rounded-full p-2"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Photo display */}
        <div className="flex flex-col items-center py-8 px-6">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Visibility indicator */}
          <button className="flex items-center gap-2 mt-4 px-4 py-2 bg-gray-100 rounded-full text-sm text-linkedin-text hover:bg-gray-200">
            <GlobeIcon />
            <span>Anyone</span>
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-8 py-6 border-t border-linkedin-border bg-gray-50">
          <ActionButton icon={<EditIcon />} label="Edit" />
          <ActionButton icon={<CameraIcon />} label="Update" />
          <ActionButton icon={<FramesIcon />} label="Frames" />
          <ActionButton
            icon={<SparkleIcon />}
            label="AI Update"
            onClick={onAIUpdate}
            highlight
          />
          <ActionButton icon={<DeleteIcon />} label="Delete" danger />
        </div>
      </div>
    </div>
  )
}

// Action button component
function ActionButton({ icon, label, onClick, highlight, danger }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 min-w-[70px] p-2 rounded-lg transition-colors
        ${highlight
          ? 'text-linkedin-blue hover:bg-blue-50'
          : danger
            ? 'text-red-600 hover:bg-red-50'
            : 'text-linkedin-textSecondary hover:bg-gray-100 hover:text-linkedin-text'
        }
      `}
    >
      {icon}
      <span className={`text-sm ${highlight ? 'font-semibold' : ''}`}>{label}</span>
    </button>
  )
}

// Icons
function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.42 12 20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8 1a7 7 0 1 0 7 7 7 7 0 0 0-7-7M5.5 4.5a6 6 0 0 1 5 0v1a6 6 0 0 1-5 0zm-1 2a7 7 0 0 0 7 0v2a7 7 0 0 0-7 0zm0 3a6 6 0 0 1 7 0v1a6 6 0 0 1-7 0zM8 14a6 6 0 0 1-4.5-2h9A6 6 0 0 1 8 14z"/>
    </svg>
  )
}

function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21.13 2.86a3 3 0 0 0-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 0 0 0-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"/>
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21 6h-3.2l-1.6-2.4A1 1 0 0 0 15.4 3H8.6a1 1 0 0 0-.8.4L6.2 6H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5m0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3"/>
    </svg>
  )
}

function FramesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM7 17h10v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"/>
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/>
      <path d="M19 8l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" opacity="0.6"/>
    </svg>
  )
}

function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>
    </svg>
  )
}

export default ProfilePhotoModal
