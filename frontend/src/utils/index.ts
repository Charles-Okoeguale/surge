const spotify_client_id = `${process.env.SPOTIFY_CLIENT_ID}`
const spotify_client_secret = `${process.env.SPOTIFY_CLIENT_SECRET}`
// const googleAuth_client_secret = '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';


export const getToken = async () => {
    let authParams = {
        method: 'POST',
        headers: {
            'Content-type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + spotify_client_id + '&client_secret=' + spotify_client_secret
      }
      const result = await fetch('https://accounts.spotify.com/api/token', authParams)
      const data = await result.json()
      return data.access_token
}


