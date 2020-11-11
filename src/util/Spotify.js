let accessToken;
const clientId = "59d0300b6aa34c8f8d8a892a910d4b90";
const redirectUri = "http://localhost:3000/results";
// const currentUrl = window.location.href;

const Spotify = {
  getAccesstoken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 900);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      //   const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentUrl}`;
      window.location = accessUrl;
      //   window.location.href = accessUrl;
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccesstoken();
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      console.log(res);
      if (res.status === 400) {
        alert("Please Enter a Value.");
      }
      const jsonRes = await res.json();
      if (!jsonRes.tracks) {
        console.log("no results found");
        return [];
      }
      return jsonRes.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    } catch (err) {
      console.log(err);
    }
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccesstoken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: headers
    });
    const jsonRes = await res.json();
    userId = jsonRes.id;
    const res_1 = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: name })
      }
    );
    const jsonRes_1 = await res_1.json();
    const playlistId = jsonRes_1.id;
    return fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris })
      }
    );
  }

  // savePlaylist(name, trackUris) {
  //     if (!name || !trackUris.length) {
  //         return;
  //     }

  //     const accessToken = Spotify.getAccesstoken();
  //     const headers = { Authorization: `Bearer ${accessToken}` };
  //     let userId;

  //     return fetch("https://api.spotify.com/v1/me", { headers: headers }).then(
  //         res =>
  //             res.json().then(jsonRes => {
  //                 userId = jsonRes.id;
  //                 return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  //                     headers: headers,
  //                     method: "POST",
  //                     body: JSON.stringify({ name: name })
  //                 })
  //                     .then(res => res.json())
  //                     .then(jsonRes => {
  //                         const playlistId = jsonRes.id;
  //                         return fetch(
  //                             `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
  //                             {
  //                                 headers: headers,
  //                                 method: "POST",
  //                                 body: JSON.stringify({ uris: trackUris })
  //                             }
  //                         );
  //                     });
  //             })
  //     );
  // }

  // search(term) {
  //     const accessToken = Spotify.getAccesstoken();
  //     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
  //         headers: {
  //             Authorization: `Bearer ${accessToken}`
  //         }
  //     })
  //         .then(res => {
  //             console.log(res);
  //             if (res.status === 400) {
  //                 alert("Please Enter a Value.");
  //             }
  //             return res.json();
  //         })
  //         .then(jsonRes => {
  //             if (!jsonRes.tracks) {
  //                 console.log("no results found");
  //                 return [];
  //             }
  //             return jsonRes.tracks.items.map(track => ({
  //                 id: track.id,
  //                 name: track.name,
  //                 artist: track.artists[0].name,
  //                 album: track.album.name,
  //                 uri: track.uri
  //             }));
  //         })
  //         .catch(err => {
  //             console.log(err);
  //         });
  // }
};
export default Spotify;
