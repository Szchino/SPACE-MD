require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJSFE1uRnAMeyQQAANEHAAAKAAAAY3JlZHMuanNvbpVUS67iRhTdSlRTUPsPGOlJMcbYYMAYjPlEPSjssjE2*pYB02LQsygjpETdrSQMklaSnmcQZQ9vD9kCS4j8ft2DpPPiictV1*eeOvec+wqEkZchFRWg+QrEqbeDGJVLXMQINEErdxyUgiqwIYagCWB*bhOxO6rtWHWFQmeIxXy4NHRJdw9OXFjBUTOXlq7U6MYNOFVBnK8Cz*pMQgOtqY7dC7JOwx+s98u6ofuZaVBMTaDdaBpTAubhwdW1qX4DTmVG6KVe6ErxGm1RCgMVFSPopc+DX8hO32hzMrKYfX*WGQrrtDOkh4KjqvVhN9lzibYjmfZmNmOfB18dx*vZjKTN6faoRl203PRVXpB1c2k7vZQc5fkwOUhmOJ6z9*Azzw2R3bVRiD1cPJt3QfDb7VjHg5BKik3Ca5zb0ju1ObFrO2gttuh4Nqr0mJVlus8DPpnWplMXriv+YpEtmf0SC6JAcVzOT1ddfp7kzLHh7Nk0KKRPgY*SR634*4d3qSWuiuTAe8N4t5bRduBvCMbgjMyorEx7rs9Ra0ckQjcM9OfBN6XNTuM8pRWJLdJa9KWVUenvBsx4sz*IisAyTH22GQcDm2x8hA9xnn5WHZWYggHru9QYcyHU1fCgsCQ7MCLYJshtK87UtTlmw95qTo7JeWyOR7ImkQ3f4pLJokYv6yErt7DqB1NH8pkh3U1s0b25u5GPiq4NmtSpClLkehlOIfaisNyjGaYKoL2bICtF+I5eUHGH7VGnEMPaMbbYQvVGw4bH8J2Mn26FzYHvccyWr4wppWfdgCqI08hCWYZsxctwlBYDlGXQRRlofvWyCkJ0wPeNK8sxVBU4XprhaZjHQQTtx64+HkLLivIQT4rQEssFSkGT*LiNMPZCNyt5zEOYWmtvh8Q1xBloOjDI0NMNUYps0MRpjp5cK0Z2SXy7oU9kUWRBFWzvGuLZoAlomiPrFMeSHFmvNzn+y+zFvswL4*hFiDCoghCW4eB6efvr9XL+8Xo5**7w*ul6Of98++F6Of92vZw*3H59*fb1n9fL23fXy*mXLx5++P72m+vl*MNT6Ifb11*89cf1zft31zfvvwNVENzhoGiS4ek6xTbqLE9zJZLy4PREQYnYRhh6QQaaQNTU+Gg09LqtTQ76YiFMBEEVhLItj5Q9au++t*OxZhSkPutE6XBBjYt9b2YNlgrhKnksWBXDdCinQnS5pJP9U5JSuMdweJS6+by7Yc3WwV8n4azvme6s3QsD3SWWblhJNNlSV35XQbhzII5t6hBL5GKU0hP3oCnbhWGThDRe15ayJKQzS23vb8pqNtp5Fvq0GLGdddoywy0ZlIj8hkzq7kAywgJ3jpZfo6gRhaxjpWab0pwmBQ2KE0UkkoKo6SQ9k*uarK5ais4slWTRN+stTWe8jSjcu+LOlcHDNPTu9FqKofx0PHQ3XB56*t*iuEdeipg8VT9J8jCv*sXzLZM0*AaWOmuoHmfDqZWJZtiWxwTbqie6MvKpOT8ndoUG1ytwOr2sgjiA2InSLWiCbLuCoArSKC8t0Q2d6DOVRMHtCg*TIIAZFj7azPC2KMNwG4MmVee4Gk016sx91CiNYgVm65ICmRW2eemZQojjCYb40bVAKJ*2qANOfwNQSwECFAMUAAAICACUhRNbkZwDHskEAADRBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAADxBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2250715405077',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
