let div = document.createElement("div")
div.setAttribute("class", "container mt-4")

let table = document.createElement('table')
table.setAttribute("class", "table table-striped")
let thead = document.createElement('thead')

let heading = document.createElement('tr')

let th1 = document.createElement('th')
th1.innerText = "Name";
heading.appendChild(th1);

let th2 = document.createElement('th')
th2.innerText = "Type";
heading.appendChild(th2);

let th3 = document.createElement('th')
th3.innerText = "Address";
heading.appendChild(th3);

let th4 = document.createElement('th')
th4.innerText = "Url";
heading.appendChild(th4);

let th5 = document.createElement('th')
th5.innerText = "Ph.No";
heading.appendChild(th5);


thead.appendChild(heading)
table.appendChild(thead)

let tbody = document.createElement("tbody")
tbody.setAttribute("id", "tbody")

const myFunc = async () => {

    try {

        let data = await fetch("https://api.openbrewerydb.org/v1/breweries");
        let res  = await data.json();
       
        for(i of res){
            let tr = document.createElement('tr')
            let td = document.createElement('td')


            td.innerText= Object.values(i).forEach(tableData => {
                let td = document.createElement('td')
                // let UpdatdTableData= tableData.map((value)=>{
                //     let brew_name=value.name;
                //     let brew_type =value.brewery_type;
                //     let brew_address = value.address_1;
                //     let brew_url= value.website_url
                //     let brew_phone = value.phone;
                //     return{brew_name,brew_type,brew_address,brew_url,brew_phone}
                // })
                td.innerText=tableData;
                // td.innerText=UpdatdTableData;
                tr.append(td)
                console.log(tr)
            })
            tbody.appendChild(tr)
        }
        
        
        

    } catch (e) {
        console.log(e)
    }

}
myFunc()

table.appendChild(tbody)


div.appendChild(table)
document.body.appendChild(div)