fetch("https://reqres.in/api/users").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData.data);
    let tableData="";
    objectData.data.map((values)=>{
        tableData+=`<tr>
        <td><img src="${values.avatar}"</td>
        <td>${values.email}</td>
        <td>${values.first_name}</td>
        <td>${values.last_name}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;

})