export default {
    async createSession(formData) {
        return await fetch('http://localhost:3001/api/sessions',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'POST',
            mode:'cors',
            body:JSON.stringify(formData)
        })
    }
}