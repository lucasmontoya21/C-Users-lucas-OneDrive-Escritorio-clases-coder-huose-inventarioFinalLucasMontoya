let selectedRow = null;
//Mostrar Alertas
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container")
    const main = document.querySelector(".main");
    container.insertBefore(div, main);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

//Borrar todos los campos
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";

}

//Agregar Datos
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();
    //traer del form
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    //validar
    if (firstName == "" || lastName == "" || rollNo == "") {
        showAlert("Por favor llene los datos en todos los campos", "danger")
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            row.innerHTML = `
        <td> ${firstName} </td>
        <td> ${lastName} </td>
        <td> ${rollNo} </td>
        <td> <a href="#" class="btn btn-warning btn-sm edit">Editar</a> </td>
        <td> <a href="#" class="btn btn-danger btn-sm danger">Borrar</a> </td>
                        
        `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Producto Agregado", "success");
        }

        else{
             selectedRow.children[0].textContent=firstName;
             selectedRow.children[1].textContent=lastName;
             selectedRow.children[2].textContent=rollNo;
             selectedRow = null;
             showAlert("Producto Editado","info");
  
             clearFields();

        }
    }

});

//Editar
document.querySelector("#student-list").addEventListener("click",(e) => {
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#lastName").value=selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value=selectedRow.children[2].textContent;
    }
})

//Borrar datos
document.querySelector("#student-list").addEventListener("click",(e) => {
    target = e.target;
   if(target.classList.contains("danger")){
    target.parentElement.parentElement.remove();
    showAlert("Producto Eliminado", "danger");
   }
})

