
const getCats = function () {
    fetch('https://api.pexels.com/v1/search?query=cats', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer 5FjV7XVYh6ZIMOmIabVjzHHZV9tlPMTX8VJhLE5TX1u4t6J865N8TE3M'
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Errore nella risposta del server')
            }
        })
}
