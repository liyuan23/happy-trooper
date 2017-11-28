var starWC = new Vue({
  el: '#starWarsChar',
  data: {
    results: {}
  },
  mounted () {
    // const url = 'https://swapi.co/api/films/7/'
    const options = {
      method: 'GET',
      Vary: 'Accept',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // let characters = []
    // let randomCharUrl, characterObj
    let name, classification, language

    const characters = [
      {
        url: 'https://swapi.co/api/people/1/',
        image: '/assets/images/1.png',
        bgImage: '/assets/images/bg1.jpg'
      }
      // {
      //   url: 'https://swapi.co/api/people/3/',
      //   image: '/assets/images/2.png',
      //   bgImage: '/assets/images/bg2.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/5/',
      //   image: '/assets/images/3.png',
      //   bgImage: '/assets/images/bg3.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/13/',
      //   image: '/assets/images/4.png',
      //   bgImage: '/assets/images/bg4.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/14/',
      //   image: '/assets/images/5.png',
      //   bgImage: '/assets/images/bg5.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/27/',
      //   image: '/assets/images/6.jpg',
      //   bgImage: '/assets/images/bg6.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/84/',
      //   image: '/assets/images/7.jpg',
      //   bgImage: '/assets/images/bg7.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/85/',
      //   image: '/assets/images/8.jpg',
      //   bgImage: '/assets/images/bg8.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/86/',
      //   image: '/assets/images/9.jpg',
      //   bgImage: '/assets/images/bg9.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/87/',
      //   image: '/assets/images/10.jpg',
      //   bgImage: '/assets/images/bg10.jpg'
      // },
      // {
      //   url: 'https://swapi.co/api/people/88/',
      //   image: '/assets/images/11.jpg',
      //   bgImage: '/assets/images/bg11.jpg'
      // }
    ]

    // for (var key in this.results) {
    //   this.results[key][0].toUpperCase()
    // }

    let index = Math.floor(Math.random() * characters.length)
    fetch(characters[index].url, options)
    .then(response => { return response.json() })
    .then(data => {
      data.image = characters[index].image
      data.bgImage = characters[index].bgImage
      this.results = data
      console.log(this.results)
    })
    .then(() => {
      // fetching species
      fetch(this.results.species[0], options)
      .then(response => { return response.json() })
      .then(species => {
        this.results.species = species
      })
      // fetching homeworld
      fetch(this.results.homeworld, options)
      .then(response => { return response.json() })
      .then(homeworld => {
        this.results.homeworld = homeworld
      })
      // fetching vehicles
      fetch(this.results.vehicles[0], options)
      .then(response => { return response.json() })
      .then(vehicle1 => {
        this.results.vehicle1 = vehicle1
      })
      fetch(this.results.vehicles[1], options)
      .then(response => { return response.json() })
      .then(vehicle2 => {
        this.results.vehicle2 = vehicle2
      })
      // fetching starships
      fetch(this.results.starships[0], options)
      .then(response => { return response.json() })
      .then(starship1 => {
        this.results.starship1 = starship1
      })
      fetch(this.results.starships[1], options)
      .then(response => { return response.json() })
      .then(starship2 => {
        this.results.starship2 = starship2
      })
    })
      // convert all first char to uppercase
  }
})

// USING FETCH CALL API RANDOMISED
// // fetching list of characters and storing
// fetch(url, options)
// .then(response => {
// return response.json()
// })
// .then(data => {
//   // store list of characters
//   characters = data.characters
//   // get length of characters array
//   let len = characters.length
//   // get a random index
//   let index = Math.floor(Math.random() * len)
//   // get a random character
//   randomCharUrl = characters[index]
// })
// .then(() => {
//   // fetching character object
//   fetch(randomCharUrl, options)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     characterObj = data
//     console.log(characterObj)
//     this.results = characterObj
//   })
// })

// USING AXIOS CALL API RANDOMISED, rmb to add in axios in html
// axios.get("https://swapi.co/api/films/7/")
// .then(response => {
//   // console.log(response.data.characters)
//   characters = response.data.characters
//   // console.log(characters)
//   randomChar = characters[Math.floor(Math.random() * characters.length)]
//   // console.log(randomChar)
// })
// .then(() => {
//   console.log('characters: ', characters)
// })
// .then(data => {
//   axios.get(randomChar)
//   .then(response => {
//     this.results = response.data
//     species = this.results.species[0]
//     this.results.species = species
//     console.log('species: ', species)
//
//     fetch(species)
//     .then(response => response.json())
//     .then(species => {
//       name = species.name
//       classification = species.classification
//       language = species.language
//       console.log('species: ', species)
//       console.log(name, classification, language)
//       this.results.speciesName = name
//     })
//   })
// })
