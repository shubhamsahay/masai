//store the products array in localstorage as "data"
let ppp =JSON.parse(localStorage.getItem("data"))||[];
console.log(ppp);
function Nike(b,n,p,i){
    this.Brand=b;
    this.Name=n;
    this.Price=p;
    this.Image=i;
}


function ss(e){
    e.preventDfault();
    let form= document.querySelector("form");
    let brand = form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;
    let pp=new Nike(brand,name,price,image);
    ppp.push(pp);
    localStorage.setItem("data",JSON.stringify(ppp))

    
}
document.querySelector("#show_products").addEventListener("click",pw);
function pw(){
    window.location.href="./inventory.html";
}

console.log("hhhhhhhhh")