module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'neon-blue': '#00f3ff',
          'neon-purple': '#bc13fe',
          'dark-bg': '#0a0a0f',
        },
        animation: {
          'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }