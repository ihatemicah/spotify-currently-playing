// Authorization of Spotify
let client_id = '87b37e88961e41af977aa8d441f2d2a6';
let redirect_uri = 'https%3A%2F%2Fihatemicah.github.io%2Fspotify-currently-playing';

const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;