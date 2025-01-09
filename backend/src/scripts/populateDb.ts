import axios from 'axios';
import AppConfig from '../config';


const client = axios.create({
    baseURL: AppConfig.BACKEND_URI || "http://localhost:3000",
  });

  const dataCat = [{ name: "toys"},{ name: "guns"}]
  const dataProdacts = [{name:"antiTank", cat:"guns", price:1, link:"link", des:"boon"},{name:"pistol", cat:"toys", price:1, link:"link", des:"boon"}]

  const dataUser = {
    name:"xxx",
    password:"justauser",
    email:"user@mail.com",
    username:"xxx2",
  }

  // const dataOrders = [  {
  //   quntety:20,
  //   name:"antiTank",
  //   date:(new Date()).toISOString(),
  //   price:"30",
  //   prodactId:18
  // }, 
  // {
  //   quntety:20,
  //   name:"pistol",
  //   date:(new Date()).toISOString(),
  //   price:"30",
  //   prodactId:19
  // }]

  async function login(user,password) {
    const loginRes =  await client.post("/auth/login", {email:user,password:password})
    console.log("token",  loginRes.data.access_token)
    client.defaults.headers["authorization"] = "Bearer " + loginRes.data.access_token;
    return loginRes
  }

 async function sendcategoires(data){
    const array = []
    for(let datum of data){
        const categoiresRes =  (await client.post("/categoires", datum))
        array.push(categoiresRes.data)
    }
   
    return array
 }
  
 function sendProdact(data){
    console.log(data)
    return client.post("/prodacts", data)

 }

async function signUpUser(user){
  user["role"] = "customer"
  return (await client.post(`/user`,user)).data
}

async function getProdacts(){
  const data = (await client.get("/prodacts")).data 
  console.log()
  return data
}

async function saveOrders(data){
  return (await client.post(`/customer/orders`, data)).data
}



 login("admin@email.com","secretpass").then(()=>{
    console.log("OK")
      sendcategoires(dataCat).then(res =>{
      return sendProdact(dataProdacts)
     }).then(res =>{
      signUpUser(dataUser).then(res =>{ 
        return login(dataUser.email, dataUser.password)
     }).then(res =>{
      getProdacts().then(res =>{
        const dataOrders = []
        const numoforders = 10
        console.log(res)
        for (const prod of res){
          for (let index = 0; index < numoforders; index++) {
            dataOrders.push({
              quntety:20,
              name:prod.name,
              date:(new Date()).toISOString(),
              price:"30",
              prodactId:prod.id
            })
          }
        }     
        console.log(dataOrders)
        saveOrders(dataOrders)   
      }).catch(err => console.log("inner error", err)) 
    }).catch(err => console.log("inner error 2", err))
  }).catch(err => console.log("inner error 3", err))

    }).catch(err => console.log("main error", err))


    
 
