class Client{

    async login(user) {
        
        return {jwt:"pikachu",admin:true}
    }

    async getCategoreis(){
        return [{name: "toys"},{name:"guns"}]
    }

    async getProdacts(){
        return [{name: "train",cat:"toys",id:1,"price": 1,"link":"www.link.com/pic","des":"train"},{name:"RPG",cat:"guns",id:2,"price": 1,"link":"www.link.com/pic","des":"train"}]
    }

    async getCustomers(){
        return [
            {name: "Avi ron",join:"01/01/2020",prodacts:[{quntety:5,name:"RPG", prodactId:2,date:"01/01/2020"},{quntety:5,name:"Train",prodactId:1,date:"02/01/2020"}]},
            {name: "Dana ron",join:"01/01/2020",prodacts:[{quntety:20,name:"RPG",prodactId:2,date:"03/01/2020"},{quntety:8,name:"Train",prodactId:1,date:"02/01/2020"}]}]
    }

    async getStatistics(){
        return [{id:1,quntety:5,prodactId:2,name:"RPG" ,date:"01/01/2020"},
            {id:2,quntety:5,prodactId:1,name: "train",date:"02/01/2020"},
            {id:3,quntety:20,prodactId:2,name:"RPG",date:"03/01/2020"},
            {id:4,quntety:8,prodactId:1,name: "train",date:"02/01/2020"}]
    }    
}

export default Client