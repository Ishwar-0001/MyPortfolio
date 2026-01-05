/** @type {import('tailwindcss').Config} */
module.exports = {
  // This ensures Tailwind scans all your React files for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Custom Animation Definition
      animation: {
        'spin-slow': 'spin 10s linear infinite', // The slow rotation
      },
      // 2. You can also extend your colors here to match the design perfectly
      colors: {
        navy: {
          900: '#0a0a1a', // Main Background
          800: '#11112b', // Card Background
        },
        neon: {
          cyan: '#00f2ff',
          purple: '#bd00ff',
        }
      }
    },
  },
  plugins: [],
  extend: {
  animation: {
    "float-slow": "float 8s ease-in-out infinite",
    "float-medium": "float 5s ease-in-out infinite",
    "float-fast": "float 3s ease-in-out infinite",
    scanline: "scan 6s linear infinite",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(-10px)" },
      "50%": { transform: "translateY(10px)" },
    },
    scan: {
      "0%": { transform: "translateY(-100%)" },
      "100%": { transform: "translateY(100%)" },
    },
  },
},

}
