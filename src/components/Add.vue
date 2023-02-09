<template>
    <Header />
    <h1>
        Add new Machine!
    </h1>

    <form class="add" onsubmit="return false;">
    <input type="text" v-model="machine.name" placeholder="Enter Machine Name" @keydown.enter="adding">
    <button type="button" v-on:click="adding">Legg til</button>
    </form>

</template>
<script>
import Header from "./Header.vue"
import axios from "axios"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Add",
    components:{
        Header
    },
    data()
    {
        return {
            machine :{
                id:"",
                name:"",
                user:''
            }

        }
    },
    methods:{
        async adding()
        {   
            let port = 7162
            let usr=localStorage.getItem("user-info");
            let user=JSON.parse(usr).id

            const result =await axios.post(`https://localhost:${port}/api/Machine/${this.machine.name},${user}`)
            if(result.status==201){
                this.$router.push({name:"Home"})
            }


        }
    },
    mounted()
    {
        let user=localStorage.getItem("user-info");
        if (!user)
        {
            this.$router.push({name:"Login"})
        }
    }
}
</script>

<style>


.add button{
  width: 320px;
  height: 40px;
  background: skyblue;
  color: white;
  cursor: pointer;
  border-color: skyblue;
  border: 1px solid;
}

.add input{
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 0;
margin-left: auto;
margin-right: auto;
}
</style>