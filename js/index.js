const search = () => {
    const searchbox = document.getElementById("search-item").value.toLowerCase() 
    const storeitems = document.getElementById("allmodels")
    const model = document.querySelectorAll(".models")
    const modelname = document.getElementsByClassName("desc")

    for(var i=0 ; i< modelname.length; i++ ){
        let match =  model[i].getElementsByClassName("desc")[0];

        if(match){
           let textvalue= match.textContent || match.innerHTML 
           if(textvalue.toLowerCase().indexOf(searchbox) > -1) {
                model[i].style.display = "block";
           }else{
            model[i].style.display = "none";

           }
        }


        
    }

}

function a() {document.getElementById('openInViewerButtonIcon').style.display = 'none';} a();
