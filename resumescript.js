function incrementVisitCount(){
    var base_url = "https://eijw6uhj5g.execute-api.us-east-1.amazonaws.com/testdeployapi";
    $('#showcount').append('Visiter Count=');
    var divContent = '';
    var xhr = new XMLHttpRequest();
          xhr.onload = function(){
            if (xhr.status === 200 && "NOK" !== xhr.responseText){
                responseObject = JSON.parse(xhr.responseText);   
                console.log(responseObject)
                divContent+=responseObject;
                $('#showcount').append(divContent);
            } else {
                $('#showcount').append("Not Available");
            }
          }
    // ajax request home tab starts
    xhr.open('GET',base_url+'/visitcount',true);
    xhr.send();

}