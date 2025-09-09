// GoldenChipLoader.jsx
import React from 'react';
import './Loader.css';

const Loader = ({ size = 70, message = "Loading..." }) => {
  return (
    <div className="golden-chip-container">
      <div className="loader-wrapper">
        {/* Main spinning golden chip */}
        <div 
          className="golden-chip"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`
          }}
        >
          {/* Outer ring with pattern */}
          <div className="chip-outer-ring">
            {/* Inner decorative ring */}
            <div className="chip-inner-ring">
              {/* Center circle */}
              <div className="chip-center">
                <div className="chip-center-dot"></div>
              </div>
              
              {/* Radial pattern lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <div
                  key={angle}
                  className="radial-line"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${angle}deg)`
                  }}
                />
              ))}
              
              {/* Diamond pattern around center */}
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <div
                  key={angle}
                  className="diamond-dot"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${size/4}px)`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Glossy shine effect */}
          <div className="chip-shine"></div>
          
          {/* Edge highlights */}
          <div className="chip-edge-highlight"></div>
        </div>
        
        {/* Floating sparkles around the chip */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              top: `${30 + Math.sin((i * 60) * Math.PI / 180) * (size/2 + 20)}px`,
              left: `${30 + Math.cos((i * 60) * Math.PI / 180) * (size/2 + 20)}px`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        {/* Rotating outer glow */}
        <div 
          className="outer-glow"
          style={{
            width: `${size + 40}px`,
            height: `${size + 40}px`
          }}
        />
      </div>
      
      {/* Loading text */}
      <div className="loading-text-wrapper">
        <div className="loading-message">
          {message}
        </div>
        <div className="loading-dots">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className="loading-dot"
              style={{ 
                animationDelay: `${dot * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Compact version for smaller spaces
const CompactGoldenChip = ({ size = 60, className = "" }) => {
  return (
    <div className={`compact-chip-container ${className}`}>
      <div className="compact-chip-wrapper">
        <div 
          className="compact-chip"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`
          }}
        >
          <div className="compact-chip-inner">
            <div className="compact-chip-center"></div>
            <div className="compact-chip-shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader