


const priceSwitch=document.querySelector('.togglerType').querySelector('#switch');

priceSwitch.addEventListener('click',changePrice);

function changePrice(){
    if(priceSwitch.checked){
        console.log('Monthly');
        monthlyPrice();
    }
    else{
        console.log('Annually');
        annuallyPrice()();
    }
}

function annuallyPrice(){
    document.querySelector('.h1Heading1').innerHTML='&dollar;199.99';
    document.querySelector('.h1Heading2').innerHTML='&dollar;249.99';
    document.querySelector('.h1Heading3').innerHTML='&dollar;399.99';
}

function monthlyPrice(){
    document.querySelector('.h1Heading1').innerHTML='&dollar;19.99';
    document.querySelector('.h1Heading2').innerHTML='&dollar;24.99';
    document.querySelector('.h1Heading3').innerHTML='&dollar;39.99';
}