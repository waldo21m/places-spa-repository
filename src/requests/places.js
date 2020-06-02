function getPlaces() {
  return fetch("http://localhost:4000/places").then(data => {
    return data.json();
  }).catch(console.log);
}

function getPlace(slug) {
  return fetch(`http://localhost:4000/places/${slug}`).then(data => {
    return data.json();
  }).catch(console.log);
}

export {getPlaces, getPlace};

export default {
  places: [
    {
      imageUrl: '/images/place-3.jpeg',
      title: 'Desayunos el rey',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av. Principal #20'
    },
    {
      imageUrl: '/images/place-1.jpeg',
      title: 'Starbucks Norte',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av. Principal #20'
    },
    {
      imageUrl: '/images/place-2.jpeg',
      title: 'Pizza de amor',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av. Principal #20'
    },
  ]
}