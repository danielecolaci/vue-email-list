const { createApp } = Vue
createApp({
    data() {
        return {
            emailList: []
        }
    },
    methods: {
        callApi() {
            const emailList = [];
            for (let i = 0; i < 10; i++) {
                emailList.push(
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response);
                        }))
            }
        }
    },
    mounted() {
        this.callApi()
    }
}).mount('#app')