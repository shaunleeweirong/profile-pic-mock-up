// ErrorBoundary.jsx - Catches runtime errors and displays fallback UI
import { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error)
      console.error('Component stack:', errorInfo.componentStack)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-linkedin-background flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border border-linkedin-border p-8 max-w-md text-center">
            <div className="text-4xl mb-4">😕</div>
            <h1 className="text-xl font-semibold text-linkedin-text mb-2">
              Something went wrong
            </h1>
            <p className="text-linkedin-textSecondary mb-4">
              We're sorry, but something unexpected happened. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-linkedin-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#004182]"
            >
              Refresh page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
