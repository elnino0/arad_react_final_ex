import axios from 'axios';


const client = axios.create({
    baseURL: "http://localhost:3000",
  });

  async function login(user,password) {
    const loginRes =  await client.post("/auth/login", {email:user,password:password})
    console.log("token",  loginRes.data.access_token)
    client.defaults.headers["authorization"] = "Bearer " + loginRes.data.access_token;
  }


 async function sendcategoires(name){
    const categoiresRes =  (await client.post("/categoires", {name}))
    return categoiresRes.data
 }
  
 async function sendProdact(catid){
    const categoiresRes =  await client.post("/prodacts", {name:"antiTank", cat:"RPG", price:1, link:"link", des:"boon"})
    return categoiresRes.data
 }

 async function sendCunsumer() {
    const categoiresRes =  await client.post("/customer", {name:"jems", join:"02/01/2020"})
    return categoiresRes.data
 }

 async function sendpurshers(customersid) {
    const categoiresRes =  await client.post("/purchases",{ customersid, quntety:1, name:"RPG",  prodactId:1, date:"02/01/2020"})
    return categoiresRes.data
 }

 login("admin@gmail.com","superadmin").then(()=>{
    console.log("OK")
    const t = client.defaults.headers
    console.log("token t ",t)
    sendcategoires("RGP").then(res => {
        sendProdact(res.id).then(console.log)
     })
    
     sendCunsumer().then(res =>{
        sendpurshers(res.id).then(console.log)
     })
    
 })
 
