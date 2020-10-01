
// FUNCTİON
function getText()
{
    fetch('text.txt')
    .then(response=>{
        return response.text();
    }).then(data=>{
        console.log(data);
    })
}

// getText();


// JSON


function getJson(){
    fetch('product.json').then(respone=>{
        return respone.json();
    }).then(datta=>{
        console.log(datta);
    }).catch(error=>{
        console.log(error);
    })
}

getJson();


// EXTERNAL APİ.

function getExternalApi()
{
    fetch('https://randomuser.me/api/?results=5').then(newData=>{
        return newData.json()
    }).then(users=>{
        var html="";
        users.results.forEach(user=>{

            html+=`
            
             <div> 
             
             <img src="${user.picture.medium}">
             <div>
                ${user.name.first}
                ${user.name.first}

             </div>

             </div>
            
            `;


            


        });

        document.querySelector('#users').innerHTML=html;
    }).catch(error=>{
        console.log(error);
    })
}

// getExternalApi();

function postExternalApi()
{
    const url ='https://jsonplaceholder.typicode.com/todos/';

    var data ={
        method:"POST",
        body:JSON.stringify({
            userId:1,
            title:"sample title",
            body:"sample body"
        }),
        headers:new Headers({
            'content-type':'application/json'
        })
    }

    fetch(url,data).then(res=>{
        console.log(res);

    });
}

postExternalApi();