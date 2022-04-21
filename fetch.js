import fetch from 'node-fetch'

// async function getDataAsync() {
// try{
// const response = await fetch('https://api.sampleapis.com/beers/ale') // GET  -> Promise
// const data = await response.json()
// console.log(data)
// // do something with response
// } catch (err) {
//     console.error(err)
// }
// }
// getDataAsync()

   //  Zach Way
// // -------------------------

// fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => {
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch((err) => {
//     console.error(err)
// })
     // Todd Way    
// // --------------------------
fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => { return response.json() })
.then((response) => response.json()) 
.then(data => console.log(data[99]))
.catch(err => console.error(err))

//  Efficient Todd Way

fetch('https://api.sampleapis.com/beers/ale')
.then((response) => response.json()) 
.then(beers => {
    for(let i = 0; i < beers.length; i++) {
        console.log(beers[i].name)
    }
})
.catch(err => console.error(err))

