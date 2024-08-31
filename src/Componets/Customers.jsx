import TableComp from "./TableComp"

function Customers({customers}){
    console.log("Customers" , customers)
    const columes =
        [
            {
              key: 'name',
              title: 'Full Name',
            },
            {
                key: 'join',
                title: 'Join at',
            },
            {
                key: 'prodacts',
                title: 'Prodacts Bought',
            }
        ]

    const render = (col,raw) => {

        if (col.key === 'prodacts'){
            const prodacts = raw.prodacts
            const columesProdacts =
            [
                {
                  key: 'name',
                  title: 'prodact',
                },
                {
                    key: 'date',
                    title: 'Join at',
                },
                {
                    key: 'quntety',
                    title: 'Prodacts Bought',
                }
            ]
            
            const renderProdacts = (col,raw) => {
                return <div className="text-blue-500 font-bold">{raw[col.key]}</div>;
            }
            return <div>
            <TableComp data={prodacts} columns={columesProdacts} render={renderProdacts}/>
            </div> 
        }

        return <div className="text-blue-500 font-bold">{raw[col.key]}</div>;

    }

 return (<div>
            <TableComp data={customers} columns={columes} render={render}/>
    </div>)
}

export default Customers