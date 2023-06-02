// Display Name, Official Name, Capital, Region, Area, Population, Flag.

let getdata = [];
function fetchapi() {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            getdata = data
            // console.log(getdata)
            let lsdata = localStorage.setItem('countrydata', JSON.stringify(getdata));

        })



    let lsgetdata = JSON.parse(localStorage.getItem("countrydata"))
    const tabledata = document.getElementById("tabledata");

    for (let i = 0; i < lsgetdata.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
    <td> ${i + 1}</td>
    <td>${lsgetdata[i].name.common}</td>
    <td>${lsgetdata[i].name.official}</td>
    <td>${lsgetdata[i].capital}</td>
    <td>${lsgetdata[i].region}</td>
    <td>${lsgetdata[i].area}</td>
    <td>${lsgetdata[i].population}</td>
    <td>${lsgetdata[i].flag}</td>`
        tabledata.appendChild(row)
        if ((lsgetdata[i].area >= 0 && lsgetdata[i].area <= 10000)) {
            row.className = "table-secondary"
        }
        if ((lsgetdata[i].area > 10001 && lsgetdata[i].area <= 50000)) {
            row.className = "table-warning"
        }
        if ((lsgetdata[i].area > 50000 && lsgetdata[i].area <= 100000)) {
            row.className = "table-success"
        }
        if ((lsgetdata[i].area > 100000)) {
            row.className = "table-danger"
        }
    }

}
fetchapi()