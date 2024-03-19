const { createApp } = Vue
createApp({
    data() {
        return {
            emailList: []
        }
    },
    methods: {
        callEmailApi() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    /* console.log(response.data.response); */
                    this.emailList.push(response.data.response)
                    /* console.log(this.emailList); */
                })
        },
        generateList(n) {
            for (let i = 0; i < n; i++) {
                this.callEmailApi();
            }
        }
    },
    mounted() {
        this.callEmailApi();
        this.generateList(10);
    }
}).mount('#app')