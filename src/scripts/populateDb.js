import axios from 'axios';


const client = axios.create({
    baseURL: "http://localhost:3000",
  });

  const dataCat = [{ name: "toys"},{ name: "guns"}]
  const dataProdacts = [{name:"antiTank", cat:"guns", price:1, link:"link", des:"boon"},{name:"pistol", cat:"toys", price:1, link:"link", des:"boon"}]
  const dataUser = {
    name:"xxx",
    password:"justauser",
    email:"user@mail.com",
    username:"xxx2",
  }

  const dataOrders = [  {
    quntety:20,
    name:"antiTank",
    date:(new Date()).toISOString(),
    price:"30",
    prodactId:18
  }, 
  {
    quntety:20,
    name:"pistol",
    date:(new Date()).toISOString(),
    price:"30",
    prodactId:19
  }]

  async function login(user,password) {
    const loginRes =  await client.post("/auth/login", {email:user,password:password})
    console.log("token",  loginRes.data.access_token)
    client.defaults.headers["authorization"] = "Bearer " + loginRes.data.access_token;
  }

  async function profile(){
    const loginRes =  (await client.get("/auth/profile")).data
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
  
 async function sendProdact(data){
    const array = []
    for(let datum of data){
        const categoiresRes =  await client.post("/prodacts", datum)
        array.push(categoiresRes.data) 
    }
 
 }

 async function sendOrders(orders){
    // const categoiresRes =  await client.post("/customer/orders",orders)
    // return categoiresRes.data
 }

 async function signUpUser(user){
    user["role"] = "customer"
    return (await client.post(`/user`,user)) 
}

async function getOrders(){
    return (await client.get(`/customer/orders`)).data
}

async function getUserProdacts(){
    return (await client.get(`/prodacts/user`)).data
}


 login("admin@gmail.com","superadmin").then(()=>{
    console.log("OK")
    const t = client.defaults.headers
    profile().then(res =>{
        console.log(res.data)
    })

    return login(dataUser.email, dataUser.password).then(res =>{
    }).then(res =>{
        return profile()
    }).then(res =>{ console.log(res) 
    }).then(res=>{ return sendOrders(dataOrders)

    }).then(res =>{return getOrders()}).then( res =>{
        console.log(res)
        return getUserProdacts()
    }) .then(res =>{ console.log(res)})


    
 })
 
