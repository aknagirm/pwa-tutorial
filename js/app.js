if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((value)=>console.log('registered', value))
        .catch((error)=>console.log('not registered', error))
}