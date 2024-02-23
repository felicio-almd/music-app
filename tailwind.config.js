/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink-footer': '#AE2896',
        'blue-footer': '#509BF5',
        'header-navigation': '#121212',
        'seta': '#131313',
        'search': '#242424',
        'login':'#a7a7a7',
        'playlist-container': '#121212',
        'card1':'rgb(0, 100, 80)',
        'card2':'rgb(132, 0, 231)',
        'card3':'rgb(30, 50, 100)',
        'card4':'rgb(140, 25, 50)',
        'card5':'rgb(232, 17, 91)',
        'card6':'rgb(83, 122, 161)',
        'card7':'rgb(142, 102, 172)',
        'card8':'rgb(20, 138, 8)',
        'card9':'rgb(30, 50, 100)',
        'card10':'rgb(233, 20, 41)',
        'card11':'rgb(80, 55, 80)',
        'card12':'rgb(216, 64, 0)',
        'card13':'rgb(186, 93, 7)',
        'card14':'rgb(0, 30, 80)',
        'card15':'rgb(60, 30, 80)',
        'artist-card':'#181818',
        'artist-card-hover':'#252525',
        'artist-category': '#6a6a6a',
        'play-fa-play':'#1db954',
        'sidebar-navigation':'#121212',
        'logo':'#121212',
        'sidebar-ul':'#b3b3b3',
        'library':'#121212',
        'library-button':'#b3b3b3',
        'light-gray':'#b3b3b3',
      },
      gridTemplateAreas: {
        'layout': [
          'sidebar header',
          'sidebar main'
        ]
      },
      gridTemplateColumns: {
        'layout': '300px 1fr',
        'cards': 'repeat(auto-fill, minmax(172px, 240px))'
      },
      gridTemplateRows: {
        'layout': '100px 1fr'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}

