

function User(id, nombre, TCasa,TCel,a,ids) {
    this.Id = id;
    this.nombre = nombre;
    this.TCasa = TCasa;
    this.TCel = TCel;
    this.a = a;
    this.ids = ids;
    this.fecha = new Date();
}
var UserList=[];
var fecha = new Date();
function Add(){
    var nombre=document.getElementById('nombre').value;
    var TCasa = document.getElementById("TCasa").value;
    var TCel = document.getElementById("TCel").value;
    var a = document.getElementById("a").value;
    var fecha = new Date();
    var id = document.getElementById("id").value;
    console.log(fecha);
    if (document.getElementById("nombre").value==="") {
        alert("Debes rellenar el nombre"); 
        
        return false; nombre==="";
      }
      if (document.getElementById("TCasa").value==="") {
        alert("Debes poner un Telefono Casa"); 
        return false;
      }
      if (document.getElementById("TCel").value==="") {
        alert("Debes poner un Telefono Celular"); 
        return false;
      }
      if (document.getElementById("a").value==="") {
        alert("Debes poner el año de nacimiento"); 
        return false;
      }
        
      if (document.getElementById("ids").value==="") {
        alert("Debes poner un identidad"); 
        return false;
      }
      
    UserList.push({
        Id:UserList.length+1,
        "id":id,
        nombre:$("#nombre").val(),
        TCasa:$("#TCasa").val(),
        TCel:$("#TCel").val(),
        a:$("#a").val(),
        ids:$("#ids").val(),
        fecha:$("#fecha").val(),
     
        "fecha":fecha
        //"_fec":_fec,
    });
    $("#nombre").val('');
    $("#TCasa").val('');
    $("#TCel").val('');
    $("#a").val('');
    $("#ids").val('');
    $("#fecha").val('');
    $("#id").val('');
    LoadTable();
};
function LoadTable(){
    
$("#myTable tbody").html('');
 var rows=" <tr><th>Nombre Completo</th><th>Teléfono Casa</th><th>Teléfono Celular</th> <th>Año de Nacimiento</th><th>Identificacion</th><th>Fecha Registro</th><th>Action</th></tr>";
    for(i=0;i<UserList.length;i++){
         rows =rows+ "<tr><td>" + UserList[i].nombre + "</td><td>" + UserList[i].TCasa + "</td><td>" + UserList[i].TCel + "</td><td>" + UserList[i].a + "</td><td>" + UserList[i].ids+ "</td><td>" + UserList[i].fecha + "</td><td> <button   onclick='update("+UserList[i].Id+")'>Actualizar</button></></><button  onclick='Delete("+UserList[i].Id+")'>Eliminar</button></td></tr>";
        $(rows).appendTo("#myTable tbody");

    }
    
}
function update(id){
var result = $.grep(UserList, function(e){ return e.Id == id; });

$("#nombre").val(result[0].nombre);
$("#TCasa").val(result[0].TCasa);
$("#TCel").val(result[0].TCel);
$("#a").val(result[0].a);
$("#ids").val(result[0].ids);
$("#id").val(result[0].Id);
$("#Add").hide();
$("#Update").show();
}
function Update(){
 for(i=0;i<UserList.length;i++){
 if(UserList[i].Id==$("#id").val()){
 UserList[i].nombre=$("#nombre").val();
 UserList[i].Tcasa=$("#TCasa").val();
 UserList[i].TCel=$("#TCel").val();
 UserList[i].a=$("#a").val();
 UserList[i].ids=$("#ids").val();

 }
 }
 LoadTable();
    $("#nombre").val('');
    $("#TCasa").val('');
    $("#TCel").val('');
    $("#a").val('');
    $("#ids").val('');
    $("#id").val('');
    $("#Add").show();
$("#Update").hide();
}
function Delete(id){
var result = $.grep(UserList, function(e){ return e.Id == id; });
 var i = UserList.indexOf(result[0]);
    if (i >= 0) UserList.splice(i, 1);{
    if(confirm('¿Seguro de borrar este registro?')){
    
     LoadTable();
     //if (confirm('¿Seguro de borrar este registro?')) {
    //    rows = td.parentElement.parentElement
     //   document.getElementById("myTable").deleteRow(row.rowIndex)
  //  }
}
    }
}
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}











//NOMBRE:LUIS FERNANDO MEJIA CRUZ