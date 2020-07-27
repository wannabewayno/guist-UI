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
        return await fetch('/api/sessions/game',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'POST',
            mode:'cors',
            body: JSON.stringify({sessionID})
        })
    },
    async connectSession(formData) {
        console.log(formData);
        const { sessionPhrase } = formData;
        return await fetch(`/api/sessions/${sessionPhrase}`)
    }
}