'use client'

import React, { useState, useEffect } from 'react'
import './lighsaber.css' // We'll create this CSS file

export const LightsaberSvg = ({ isOn = false, autoToggle = false }) => {
  const [lightsaberOn, setLightsaberOn] = useState(isOn)

  // Optional auto-toggle effect
  useEffect(() => {
    if (autoToggle) {
      const interval = setInterval(() => {
        setLightsaberOn((prev) => !prev)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [autoToggle])

  const handleClick = () => {
    setLightsaberOn((prev) => !prev)
  }

  return (
    <svg
      width={236 / 2}
      height={22 / 2}
      viewBox="0 0 236 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="lightsaber"
    >
      <g clipPath="url(#clip0_2053_38)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M233.195 13.5129C234.709 13.4711 235.951 12.4107 235.998 11.0775C236.047 9.68926 234.793 8.52986 233.195 8.48806L75.6982 6.60046L75.6982 15.4005L233.195 13.5129Z"
          className={`lightsaber-blade ${lightsaberOn ? 'on' : 'off'}`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.6981 22L75.6981 19.8L77.9246 19.8L77.9246 22L75.6981 22Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.0189 22L69.0189 19.8L71.2454 19.8L71.2454 22L69.0189 22Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.000146766 17.6L0.000147343 4.40002L2.22656 4.40002L2.22656 17.6L0.000146766 17.6Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.0755 17.6L40.0755 4.40002L44.5283 4.40002L44.5283 17.6L40.0755 17.6Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.8868 17.6L57.8868 4.40002L66.7925 4.40002L66.7925 17.6L57.8868 17.6Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.5282 19.8L44.5282 2.19995L57.8867 2.19995L57.8867 19.8L44.5282 19.8Z"
          fill="#323232"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.7924 19.8L66.7924 2.19995L75.6981 2.19995L84.6038 19.8L66.7924 19.8Z"
          fill="#323232"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.7547 -3.89279e-07L46.7547 2.2L55.6604 2.2L55.6604 0L46.7547 -3.89279e-07Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.22638 17.6L2.22638 4.40002L40.0754 4.40002L40.0754 17.6L2.22638 17.6Z"
          fill="#BEBEBE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.22638 6.59995L2.22638 2.19995L40.0754 2.19995L40.0754 6.59995L2.22638 6.59995Z"
          fill="#323232"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.22638 19.8L2.22638 15.4L40.0754 15.4L40.0754 19.8L2.22638 19.8Z"
          fill="#323232"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.22638 13.2L2.22638 8.80005L40.0754 8.80005L40.0754 13.2L2.22638 13.2Z"
          fill="#323232"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_38">
          <rect width="22" height="236" fill="white" transform="translate(236) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  )
}
