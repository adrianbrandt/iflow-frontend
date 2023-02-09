<template>
    <Header />
    <h1>
        HomePage for : {{ name }}
    </h1>
    <table border="1">
        <tr v-for="item in machine" :key="item.id">
            <td>
                {{ item.name}}
            </td>
            <td class="but">
                <router-link class="link-button" :to="'/Update/' +item.id" >
                    Update
                </router-link>
            </td>
            <td class="but">
                <button type="button" v-on:click="deleteMachine(item.id)">
                    Delete
                </button>
            </td>
        </tr>
    </table>
</template>
<script>
import Header from "./Header.vue"
import axios from "axios"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data(){
        return {
            name:"",
            machine:[],
        }
    },
    components:{
        Header
    },
    methods :{
        async deleteMachine(id){
            let result = await axios.get(`https://localhost:7162/api/Machine/${id}`)
            if(result.status==200){
                await axios.delete(`https://localhost:7162/api/Machine/${id}`)
                this.loadData();
            }
        },
        async loadData(){
            //Bytt ut om api får ny port ved testing
            let port = 7162;
            let user=localStorage.getItem("user-info");
            this.name=JSON.parse(user).name
            let id=JSON.parse(user).id
            if (!user)
            {
                this.$router.push({name:"Login"})
            }
            let result = await axios.get(`https://localhost:${port}/api/Machine/${id},all,1`);
            this.machine=result.data;
        }
    },
    async mounted()
    {
        this.loadData();
        
    }
}
</script>
<style>

table{
    margin: auto;
    border: none;
}

.but{
    width:45px;
    margin-left: 0;
    margin-right: 0;
}

td{
  width: 320px;
  height: 50px;
  background: #333;
  color: #f2f2f2;

  align-items: center;
  border: 1px solid black;

}

.link-button{
width:60px;
display: block;
margin: auto;
cursor: pointer;
padding-top: 35%;
height: 80%;
}

.but:hover{
    background:#ddd;
}
.link-button:hover{
    color: #333;
}

.link-button{
  overflow: hidden;
  float:left;
  color: #f2f2f2;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
button{
    background: #333;
    border: none;
    height: 100%;
    color: #f2f2f2;
    font-size: 17px;
    cursor: pointer;
}
button:hover{
    background:#ddd;
    color: #333;

}

</style>