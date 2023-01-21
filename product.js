const app = Vue.createApp({
    data() {
        return {
               text:'test',
               apiUrl: 'https://vue3-course-api.hexschool.io/v2',
               apiPath: 'ksin588',
               products:[],
               detail:{}

        }
    },
    methods: {
        
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")
        axios.defaults.headers.common['Authorization'] = token;
        axios(`${this.apiUrl}/api/${this.apiPath}/admin/products`)
        .then((res)=>{
            console.log(res.data.products)
            this.products = res.data.products
            console.log(this.products)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
})
app.mount('#app')