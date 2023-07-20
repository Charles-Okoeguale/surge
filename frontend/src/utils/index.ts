const spotify_client_id = '012a6e8fe6d04bb187c14add7af395f0'
const spotify_client_secret = '82690458d09147fc9e2dee78b0b8fe51'
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

// XL - (e) jo014 (p) P@ssword4X
// Fresh - (U) UsernameForFresh (p) P@ssword4Fresh

// Z - dhian.purnamasari@btn.co.id batarabatara
// Z - sclass@epbfi.com Colnago1949 

// 185.202.175.29
// 569SKwpZHN

// mail.btn.co.id
//mail.epbfi.com

