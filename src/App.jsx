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
  const [isLoading, setIsLoading] = useState(false)

  const currentImage = PROFILE_IMAGES[currentImageIndex]

  // Open modal when profile picture clicked
  const handleProfileClick = () => {
    setIsModalOpen(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // AI Update - cycle to next image with simulated loading
  const handleAIUpdate = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
    const nextIndex = (currentImageIndex + 1) % PROFILE_IMAGES.length
    setCurrentImageIndex(nextIndex)
    setIsLoading(false)
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
        isLoading={isLoading}
      />
    </div>
  )
}

export default App
