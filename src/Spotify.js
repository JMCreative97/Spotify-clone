export const authEndPoint = "https://accounts.spotify.com/en/authorize";
const redirect_uri = "http://localhost:3000/#";

var client_id = 'f6769cd50eb4463fae2ef43fd7ea883c'; // Your client id
const scope =[
    "user-read-playback-state",
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-top-read",
    "user-modify-playback-state",
   ];


export const getTokenFromUrl = () => {
    return window.location.hash
    .substr(1)
    .split('&')
    .reduce((initial, item) => {
        // #accessToken=mysecretkey
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndPoint}?response_type=token&client_id=${client_id}&scope=${scope.join("%20")}&redirect_uri=${redirect_uri}&show_dialog=true`;