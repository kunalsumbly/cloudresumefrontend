function incrementVisitCount(){
    var base_url = "http://localhost:9098";
    $('#showcount').append('Visiter Count=');
    var divContent = '';
    var xhr = new XMLHttpRequest();
          xhr.onload = function(){
            if (xhr.status === 200){
                responseObject = JSON.parse(xhr.responseText);   
                console.log(responseObject)
                divContent+=responseObject;
                $('#showcount').append(divContent);
            }
          }
    // ajax request home tab starts
    xhr.open('GET',base_url+'/visitcount',true);
    xhr.send();

}