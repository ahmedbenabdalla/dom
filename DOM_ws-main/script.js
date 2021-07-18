document.querySelectorAll('.plus').forEach(B=>B.addEventListener('click',increment));
document.querySelectorAll('.minus').forEach(B=>B.addEventListener('click',decrement));
document.querySelectorAll('.minus').forEach(B=>B.addEventListener('click',decrement));
document.querySelectorAll('.like').forEach(B=>B.addEventListener('click',changeColor));
document.querySelectorAll('.delete').forEach(B=>B.addEventListener('click',remove));





function total()
{
    const dataForTotalPrice= document.querySelectorAll('.price');
    const totalPrice=Array.from(dataForTotalPrice,p=>p.innerHTML).reduce((a,b)=>parseInt(a)+parseInt(b));
    document.querySelector("#total").innerHTML=totalPrice;  
}
function increment(event)
{   
    const price=event.target.parentNode.parentNode.nextElementSibling.nextElementSibling;
    const totalElementsProducts=event.target.nextElementSibling;
    const unitPrice=event.target.parentNode.parentNode.nextElementSibling;
    totalElementsProducts.innerHTML=parseInt(totalElementsProducts.innerHTML)+1;   
    price.innerHTML=parseInt(unitPrice.innerHTML)*parseInt(totalElementsProducts.innerHTML);
    total(); 
}
function decrement(event)
{   
    const totalElementsProducts=event.target.previousElementSibling;
    if(parseInt(totalElementsProducts.innerHTML)>0)
    {
       totalElementsProducts.innerHTML=parseInt(totalElementsProducts.innerHTML)-1;  
       const price=event.target.parentNode.parentNode.nextElementSibling.nextElementSibling;
       const unitPrice=event.target.parentNode.parentNode.nextElementSibling.innerHTML;
       price.innerHTML=parseInt(price.innerHTML)-parseInt(unitPrice); 
       total();
    }
}
function changeColor(event)
{  
    if(event.target.style.color=='red')
        event.target.style.color='#424242';
    else
        event.target.style.color='red';   
}
function remove()
{
    const rowToDelete=event.target.parentNode.parentNode.parentNode.parentNode;
    rowToDelete.parentNode.removeChild(rowToDelete);
    total();
}


