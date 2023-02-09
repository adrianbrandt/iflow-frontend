<template>
<h1>Log in</h1>

<div id="loginfield">
    <input type="text" v-model="id" placeholder="Id">
    <input type="pass" v-model="pass" placeholder="password">
    <button v-on:click="login">Sign in</button>
</div>

</template>
<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Login',
    data()
    {
        return {
            id:"",
            pass:''
        }
    },
    methods:{
        async login()
        {   
            //Bytt ut om api får ny port ved testing
            let port = 7162;
            let result = await axios.get(`https://localhost:${port}/api/User/${this.id},${this.pass}`)
            if(result.status == 200)
            console.warn(result.status)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:"Home"})
            }
        }
    },
    mounted()
    {
        let user=localStorage.getItem("user-info");
        if (user)
        {
            this.$router.push({name:"Home"})
        }
    }
}
</script>
<style>



</style>