// When starting a front end, it is usual to first separate out the functions which will be implemented by
// a web service. This module demonstrates how such a “mock” service can look. Note how the external interface
// of the final ApiService object matches the one in api.js. That’s because, in reality, this file is actually
// how api.js _starts_, and it morphs into the final api.js when you connect to the web service for real.
(() => {
  const searchGames = () => Promise.resolve({ 
    data: [
      {
        source_tld: '',
        images: {
          fixed_width: {
            url: 'https://static-cdn.jtvnw.net/ttv-boxart/Red%20Dead%20Redemption%202-130x173.jpg' //RED DEAD
          }
        }
      },
      {
        source_tld: '',
        images: {
          fixed_width: {
            url: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-130x173.jpg' //FORTNITE
          }
        }
      },
      {
        source_tld: '',
        images: {
          fixed_width: {
            url: 'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%204-285x380.jpg' //BLACK OPS 5
          }
        }
      }
    ]
  })

  window.ApiService = {
    apiHost: () => {}, // No-op in our mock version.
    searchGames
  }
})()
