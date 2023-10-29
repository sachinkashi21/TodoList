let contain=document.querySelector(".container");
let input=document.querySelector("#todo");
if(localStorage.getItem("todo")){
} else{
    localStorage.setItem("todo",'[]');
}
let arr=JSON.parse(localStorage.getItem("todo"));

function prevTodo(){
    for(let i=0;i<arr.length;i++){
        let h4=document.createElement("h4");
        let btn=document.createElement("button");
        let item=document.createElement("div");
        
        btn.classList.add("doneBtn");
        item.classList.add("item");
        
        btn.innerText="Done";
        h4.innerText = arr[i];
        
        contain.appendChild(item);
        item.appendChild(h4);
        item.appendChild(btn);
    }
}

window.onload=prevTodo;

contain.addEventListener("click",(e)=>{
    if(e.target.className==="doneBtn"){
        let item=e.target.parentElement;
        let del=item.children[0].innerHTML;
        let i=arr.indexOf(del);

        arr.splice(i,1);

        let todo=JSON.stringify(arr);
        localStorage.setItem("todo",todo);
        
        // alert(`Todo removed :${del}`);
        item.remove();
    }
});

let addBtn=document.querySelector("#addTodoBtn");
addBtn.addEventListener("click",()=>{
    let h4=document.createElement("h4");
    let btn=document.createElement("button");
    let item=document.createElement("div");
    
    btn.classList.add("doneBtn");
    item.classList.add("item");
    
    btn.innerText="Done";
    h4.innerText = input.value;
    
    contain.appendChild(item);
    item.appendChild(h4);
    item.appendChild(btn);
    
    arr.push(input.value);
    let todo=JSON.stringify(arr);
    localStorage.setItem("todo",todo);
    input.value="";
})