const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "934f8bedc3424104931c05fd826bb1cb";
const redirectUrl = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;