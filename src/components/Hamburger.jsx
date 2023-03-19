import React, { useState, useCallback } from 'react'

// const { active, handleClick } = Astro.props
const Hamburger = () => {
  const [active, setActive] = useState(false) // Menu

  const handleClick = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <button
      aria-label='Hamburger'
      className={`hamburger hamburger--emphatic ${
        active ? 'is-active' : false
      }`}
      type='button'
      onClick={handleClick}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner' />
      </span>
      <style jsx>{`
        .hamburger {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .hamburger {
            padding: 10px 15px;
            outline: none;
            display: inline-block;
            cursor: pointer;
            transition-property: opacity, filter;
            transition-duration: 0.15s;
            transition-timing-function: linear;
            font: inherit;
            color: inherit;
            text-transform: none;
            background-color: transparent;
            border: 0;
            margin: 0;
            overflow: visible;
          }
          .hamburger.is-active .hamburger-inner,
          .hamburger.is-active .hamburger-inner::before,
          .hamburger.is-active .hamburger-inner::after {
            background-color: #ffffff;
          }

          .hamburger-box {
            width: 40px;
            height: 24px;
            display: inline-block;
            position: relative;
          }

          .hamburger-inner {
            display: block;
            top: 50%;
            margin-top: -2px;
          }
          .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
            width: 40px;
            height: 4px;
            background-color: #ffffff;
            border-radius: 4px;
            position: absolute;
            transition-property: transform;
            transition-duration: 0.15s;
            transition-timing-function: ease;
          }
          .hamburger-inner::before,
          .hamburger-inner::after {
            content: '';
            display: block;
          }
          .hamburger-inner::before {
            top: -10px;
          }
          .hamburger-inner::after {
            bottom: -10px;
          }
          .hamburger--emphatic {
            overflow: hidden;
          }
          .hamburger--emphatic .hamburger-inner {
            transition: background-color 0.125s 0.175s ease-in;
          }
          .hamburger--emphatic .hamburger-inner::before {
            left: 0;
            transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
              top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
          }
          .hamburger--emphatic .hamburger-inner::after {
            top: 10px;
            right: 0;
            transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
              top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
          }
          .hamburger--emphatic.is-active .hamburger-inner {
            transition-delay: 0s;
            transition-timing-function: ease-out;
            background-color: transparent !important;
          }
          .hamburger--emphatic.is-active .hamburger-inner::before {
            left: -80px;
            top: -80px;
            transform: translate3d(80px, 80px, 0) rotate(45deg);
            transition: left 0.125s ease-out, top 0.05s 0.125s linear,
              transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
          .hamburger--emphatic.is-active .hamburger-inner::after {
            right: -80px;
            top: -80px;
            transform: translate3d(-80px, 80px, 0) rotate(-45deg);
            transition: right 0.125s ease-out, top 0.05s 0.125s linear,
              transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        }
      `}</style>
    </button>
  )
}

export default Hamburger
