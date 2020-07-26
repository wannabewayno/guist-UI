export default {
    async createSession(formData) {
        return await fetch('/api/sessions',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'POST',
            mode:'cors',
            body: JSON.stringify(formData)
        })
    },
    async createGame(sessionID) {
        console.log('API:',sessionID);
        return await fetch('/api/sessions/game',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'POST',
            mode:'cors',
            body: JSON.stringify({sessionID})
        })
    }

}