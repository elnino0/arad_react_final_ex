
import axios from 'axios';
const URL = "http://localhost:3000"

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

    logout(){
        localStorage.setItem("accessToken", undefined);
    }

    isLogin(){
        return localStorage.getItem("accessToken") != undefined
    }

    static getInstance() {
      if (!this.instance) {
        this.instance = new Client();
      }
      return this.instance;
    }
  }

export default Client