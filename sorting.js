let lsgetdata = JSON.parse(localStorage.getItem("countrydata"));
let tabledata = document.getElementById("tabledata");
let searchdata = document.getElementById("searchinput")

// console.log(filterdata)
searchdata.addEventListener('keyup', () => {
    searchdata = document.getElementById("searchinput").value

    let filterdata = lsgetdata.filter((newdata) => {
        return (newdata.name.common.toLowerCase().includes(searchdata))
    })
    tabledata.innerHTML = ""
    for (let i = 0; i < filterdata.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
    <td>${i + 1}</td>
    <td>${filterdata[i].name.common}</td>
    <td>${filterdata[i].name.official}</td>
    <td>${filterdata[i].capital}</td>
    <td>${filterdata[i].region}</td>
    <td>${filterdata[i].area}</td>
    <td>${filterdata[i].population}</td>
    <td>${filterdata[i].flag}</td>`
        tabledata.appendChild(row)
        if ((filterdata[i].area >= 0 && filterdata[i].area <= 10000)) {
            row.className = "table-secondary"
        }
        if ((filterdata[i].area > 10001 && filterdata[i].area <= 50000)) {
            row.className = "table-warning"
        }
        if ((filterdata[i].area > 50000 && filterdata[i].area <= 100000)) {
            row.className = "table-success"
        }
        if ((filterdata[i].area > 100000)) {
            row.className = "table-danger"
        }
    }
})

