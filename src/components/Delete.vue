<template>
    <Header />
    <form class="add">
    <input type="text" placeholder="Skriv Maskin Navn" v-model="machine.name">
    <button type="button" v-on:click="update">Legg til</button>
    </form>

</template>
<script>
import Header from "./Header.vue"
import axios from "axios"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Update",
    components:{
        Header
    },
    data()
    {
        return {
            machine :{
                id:"",
                name:"",
                bruker:''
            }

        }
    },
    methods :{
        async update()
        {   
            let port = 7162
            let usr=localStorage.getItem("user-info");
            let uid=JSON.parse(usr).id

            const result =await axios.put(`https://localhost:${port}/api/Maskin/`+this.$route.params.id,{
                id:this.$route.params.id,
                name:this.machine.name,
                bruker:uid,
            });
            console.warn(result.status)
            if(result.status==204){
                this.$router.push({name:"Home"})
            }


        }
    },
    async mounted()
    {
        let user=localStorage.getItem("user-info");
        let mid = this.$route.params.id;
        if (!user)
        {
            this.$router.push({name:"Login"})
        }
        const result = await axios.get(`https://localhost:7162/api/Maskin/${mid}`)
        console.warn(result.data);
        this.machine = result.data;
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