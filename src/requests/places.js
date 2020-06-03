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
      title: 'Place #1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam at cum cumque dolore dolorum eligendi excepturi illo ipsa nisi numquam, perferendis quae quis quod repellat reprehenderit unde ut vel!',
      address: 'Av. Principal #20'
    },
    {
      imageUrl: '/images/place-1.jpeg',
      title: 'Place #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam at cum cumque dolore dolorum eligendi excepturi illo ipsa nisi numquam, perferendis quae quis quod repellat reprehenderit unde ut vel!',
      address: 'Av. Principal #20'
    },
    {
      imageUrl: '/images/place-2.jpeg',
      title: 'Place #3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam at cum cumque dolore dolorum eligendi excepturi illo ipsa nisi numquam, perferendis quae quis quod repellat reprehenderit unde ut vel!',
      address: 'Av. Principal #20'
    },
  ]
}