let list=document.querySelector("#list");
        let btn=document.querySelector("#add");
        let input=document.querySelector("#inp");
        btn.addEventListener("click",function(){
            let listItem=document.createElement("li");
            listItem.innerText=input.value;
            list.append(listItem); 
            input.value="";
            let button=document.createElement("button");
            button.innerText="remove";
            button.classList.add("removeBtn");
            listItem.append(button);
            // button.addEventListener("click",function(){
            //     list.removeChild(listItem);
            // })
        });
        let ul=document.querySelector("ul");
        ul.addEventListener("click",function(event){
        
          if(event.target.nodeName=="BUTTON"){
            let listItem=event.target.parentElement;
            listItem.remove();
          }
        });