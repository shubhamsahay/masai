let prodd=JSON.parse(localStorage.getItem("data"));
display(prodd)
function display (prodd){
    document.querySelector("#products_data").innerHTML="";
    prodd.map(function(el,index){
        let d1=document.createElement("div");
        d1.style.height="120px";
        d1.style.width="120px";
        let img=document.createElement("img");
        img.src=el.image;
        img.style.height="70%";
        img.style.width="70%";
        let b=document.createElement("h3");
        b.innerText=el.Brand;
        let n=document.createElement("h3");
        n.innerText=el.Name;
        let p=document.createElement("h3");
        p.innerText=el.Price;
       

        let btn=document.createElement("btn");
        btn.innerText="Remove";
        btn.innerText='Remove';
        btn.style.width="130px";
        btn.style.height="30px"
        btn.addEventListener("click",function(){
            hello(el,index)
        })
        btn.setAttribute("id","remove_product");
        d1.append(img,b,n,p,btn);

        document.querySelector("#products_data").append(d1);

    })
}

function hello(el,index){
    prodd.splice(index,1);
    localStorage.setItem("data",JSON.stringify(prodd));
    display(prodd);
}
document.querySelector("#add_product").addEventListener("click",lll);
function lll(){
    window.localStorage.href="index.html";
}
console.log("hhhhhhhhhftuhfgfjg")