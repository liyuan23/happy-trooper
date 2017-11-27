

var starWC = new Vue({
  el: '#starWarsChar',
  data: {
    results: {}
  },
  mounted() {
    var characters = []
    var randomChar = ''
    var species, name, classification, language

    axios.get("https://swapi.co/api/films/7/")
    .then(response => {
      // console.log(response.data.characters)
      characters = response.data.characters
      // console.log(characters)
      randomChar = characters[Math.floor(Math.random() * characters.length)]
      // console.log(randomChar)
    })
    .then(data => {
      axios.get(randomChar)
      .then(response => {
        this.results = response.data
        species = this.results.species[0]
        this.results.species = species
        console.log('species: ', species)

        fetch(species)
        .then(response => response.json())
        .then(species => {
          name = species.name
          classification = species.classification
          language = species.language
          console.log('species: ', species)
          console.log(name, classification, language)
          this.results.speciesName = name
        })
      })
    })
  }
})
