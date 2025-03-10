import React from 'react'

const BackgroundSvg = () => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern
          id="repeatPattern"
          x="0"
          y="0"
          width="283"
          height="34"
          patternUnits="userSpaceOnUse"
        >
          <svg width="283" height="34" viewBox="0 0 283 34" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#fff" strokeWidth="4.8" strokeOpacity="0.82">
              <path d="M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
              <path d="M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
              <path d="M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
              <path d="M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
              <path d="M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
              <path d="M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
            </g>
          </svg>
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#repeatPattern)" />
    </svg>
  )
}

export default BackgroundSvg
