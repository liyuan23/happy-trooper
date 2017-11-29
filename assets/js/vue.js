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

    const characters = [
      {
        url: 'https://swapi.co/api/people/1/',
        image: './assets/images/1.jpg',
        vehicle1Image: './assets/images/t47.jpg',
        vehicle2Image: './assets/images/74z.jpg',
        starship1Image: './assets/images/t65.jpg',
        starship2Image: './assets/images/is.jpg'
      },
      {
        url: 'https://swapi.co/api/people/3/',
        image: './assets/images/2.jpg'
      },
      {
        url: 'https://swapi.co/api/people/5/',
        image: './assets/images/3.jpg',
        vehicle1Image: './assets/images/74z.jpg'
      },
      {
        url: 'https://swapi.co/api/people/13/',
        image: './assets/images/4.jpg',
        vehicle1Image: './assets/images/atst.jpg',
        starship1Image: './assets/images/mf.jpg',
        starship2Image: './assets/images/is.jpg'
      },
      {
        url: 'https://swapi.co/api/people/14/',
        image: './assets/images/5.jpg',
        starship1Image: './assets/images/mf.jpg',
        starship2Image: './assets/images/is.jpg'
      },
      {
        url: 'https://swapi.co/api/people/27/',
        image: './assets/images/6.jpg'
      },
      {
        url: 'https://swapi.co/api/people/84/',
        image: './assets/images/7.jpg'
      },
      {
        url: 'https://swapi.co/api/people/85/',
        image: './assets/images/8.jpg'
      },
      {
        url: 'https://swapi.co/api/people/86/',
        image: './assets/images/9.jpg',
        starship1Image: './assets/images/fighter.jpg'
      },
      {
        url: 'https://swapi.co/api/people/87/',
        image: './assets/images/10.jpg'
      },
      {
        url: 'https://swapi.co/api/people/88/',
        image: './assets/images/11.jpg'
      }
    ]

    let index = Math.floor(Math.random() * characters.length)
    fetch(characters[index].url, options)
    .then(response => { return response.json() })
    .then(data => {
      data.image = characters[index].image
      data.vehicle1Image = characters[index].vehicle1Image
      data.vehicle2Image = characters[index].vehicle2Image
      data.starship1Image = characters[index].starship1Image
      data.starship2Image = characters[index].starship2Image
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
  }
})
