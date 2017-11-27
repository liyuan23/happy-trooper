

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

    const characters = [
      {
        url: 'https://swapi.co/api/people/1/',
        image: '/assets/images/luke.jpg'
      },
      {
        url: 'https://swapi.co/api/people/1/',
        image: '/assets/images/luke.jpg'
      },
      {
        url: 'https://swapi.co/api/people/1/',
        image: '/assets/images/luke.jpg'
      },
      {
        url: 'https://swapi.co/api/people/1/',
        image: '/assets/images/luke.jpg'
      }
    ]

    let index = Math.floor(Math.random() * characters.length)
    fetch(characters[index].url, options)
    .then(response => { return response.json() })
    .then(data => {
      data.image = characters[index].image
      this.results = data
    })

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
  }
})
