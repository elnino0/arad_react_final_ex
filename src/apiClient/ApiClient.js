
import axios from 'axios';
const URL = "http://localhost:3000"

// class Client{

//     constructor(){
//         this.client = axios.create({
//             baseURL: URL,
//           });
//     }

//     async login(userName,password) {
//         const loginRes =  await this.client.post("/auth/login", {email:userName,password:password})
//         console.log("token",  loginRes.data.access_token)
//         this.client.defaults.headers["authorization"] = "Bearer " + loginRes.data.access_token;
//         this.client.defaults.headers["Access-Control-Allow-Origin"] = "*"
//         return {admin:loginRes.data.admin}
//     }

//     async getCategoreis(){
//         return (await this.client.get("/categoires")).data
//     }
//     async getProdacts(){
//         return (await this.client.get("/prodacts")).data
//     }

//     async getCustomers(){
//         return (await this.client.get("/customer")).data

//     }

//     async getStatistics(){
//         return (await this.client.get("/purchases")).data
//     }

//     // async getCategoreis(){
//     //     return [{name: "toys"},{name:"guns"}]
//     // }

//     // async getProdacts(){
//     //     return [{name: "train",cat:"toys",id:1,"price": 1,"link":"www.link.com/pic","des":"train"},{name:"RPG",cat:"guns",id:2,"price": 1,"link":"www.link.com/pic","des":"train"}]
//     // }

//     // async getCustomers(){
//     //     return [
//     //         {name: "Avi ron",join:"01/01/2020",prodacts:[{quntety:5,name:"RPG", prodactId:2,date:"01/01/2020"},{quntety:5,name:"Train",prodactId:1,date:"02/01/2020"}]},
//     //         {name: "Dana ron",join:"01/01/2020",prodacts:[{quntety:20,name:"RPG",prodactId:2,date:"03/01/2020"},{quntety:8,name:"Train",prodactId:1,date:"02/01/2020"}]}]
//     // }

//     // async getStatistics(){
//     //     return [{id:1,quntety:5,prodactId:2,name:"RPG" ,date:"01/01/2020"},
//     //         {id:2,quntety:5,prodactId:1,name: "train",date:"02/01/2020"},
//     //         {id:3,quntety:20,prodactId:2,name:"RPG",date:"03/01/2020"},
//     //         {id:4,quntety:8,prodactId:1,name: "train",date:"02/01/2020"}]
//     // }    
// }


class Client {
    constructor() {
        this.client = axios.create({
            baseURL: URL,
          });
          this.client.defaults.headers["authorization"] = "Bearer " + localStorage.getItem("accessToken");
    }
  
    async login(userName,password) {
        const loginRes =  await this.client.post("/auth/login", {email:userName,password:password})
        console.log("token",  loginRes.data.access_token)
        this.client.defaults.headers["authorization"] = "Bearer " + loginRes.data.access_token;
        this.client.defaults.headers["Access-Control-Allow-Origin"] = "*"
        localStorage.setItem("accessToken", loginRes.data.access_token);
        return {admin:loginRes.data.admin}
    }

    async getCategoreis(){
        return (await this.client.get("/categoires")).data
    }
    async getProdacts(){
        const data = (await this.client.get("/prodacts")).data 
        console.log()
        return data
    }

    async getCustomers(){
        return (await this.client.get("/customer")).data

    }

    async getStatistics(){
        return (await this.client.get("/purchases")).data
    }


    async updateCategoreis(data){
        return (await this.client.patch("/categoires", data)).data
    }

    async updateProdacts(data){
        return (await this.client.patch("/prodacts", data)).data
    }

    async saveCategoreis(data){
        return (await this.client.post("/categoires", data)).data
    }

    async saveProdacts(data){
        return (await this.client.post("/prodacts", data)) .data
    }

    async deletecategory(id){
        return (await this.client.delete(`/categoires/${id}`)).data 
    }
    
    async saveOrders(data){
        return (await this.client.post(`/customer/orders`, data)).data
    }

    async getOrders(){
        return (await this.client.get(`/customer/orders`)).data
    }

    async getUserProdacts(){
        return (await this.client.get(`/prodacts/user`)).data
    }
    
    
    
    async hideUserPhurches(ishide){
        return (await this.client.patch(`/customer/hideOrders`), data={ishide}).data 
    }

    async signUpUser(user){
        user["role"] = "customer"
        return (await this.client.post(`/user`,user)).data
    }

    static getInstance() {
      if (!this.instance) {
        this.instance = new Client();
      }
      return this.instance;
    }
  }

export default Client