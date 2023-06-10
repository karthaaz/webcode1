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
       console.log(res)
        for(i of res){
            let tr = document.createElement('tr')
            let name_td = document.createElement('td')
            let type_td = document.createElement('td')
            let add_td = document.createElement('td')
            let url_td = document.createElement('td')
            let phone_td = document.createElement('td')
            
            name_td.innerText=i.name
            type_td.innerText=i.brewery_type
            add_td.innerText=i.address_1
            url_td.innerText=i.website_url
            phone_td.innerText=i.phone

            tr.appendChild(name_td)
            tr.appendChild(type_td)
            tr.appendChild(add_td)
            tr.appendChild(url_td)
            tr.appendChild(phone_td)
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