import { useState } from 'react'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import ProfilePhotoModal from './components/ProfilePhotoModal'
import Sidebar from './components/Sidebar'

// Profile images - add your images to public/images/
const PROFILE_IMAGES = [
  '/images/profile.png',      // Current profile picture
  '/images/ai-option.jpeg',   // AI-generated option
]

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentImage = PROFILE_IMAGES[currentImageIndex]

  // Open modal when profile picture clicked
  const handleProfileClick = () => {
    setIsModalOpen(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // AI Update - cycle to next image
  const handleAIUpdate = () => {
    const nextIndex = (currentImageIndex + 1) % PROFILE_IMAGES.length
    setCurrentImageIndex(nextIndex)
    console.log(`AI Update: Changed to image ${nextIndex + 1} of ${PROFILE_IMAGES.length}`)
  }

  return (
    <div className="min-h-screen bg-linkedin-background">
      <Header />

      <main className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main content - Profile Card */}
          <div className="flex-1">
            <ProfileCard
              profileImage={currentImage}
              onProfileClick={handleProfileClick}
            />
          </div>

          {/* Sidebar */}
          <div className="w-[300px] hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Profile Photo Modal */}
      <ProfilePhotoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        profileImage={currentImage}
        onAIUpdate={handleAIUpdate}
      />
    </div>
  )
}

export default App
