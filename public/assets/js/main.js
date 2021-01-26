async function getData() {
    try {
        const response = await fetch('assets/data/data.json');
        const data = await response.json();
        const list = document.querySelector('.menu ul');

        for (let i = 0; i < data.menu.length; i++) {
            const item = data.menu[i];
            console.log(item);
        } 

        data.menu.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = item
            list.appendChild(listItem);
        });

    } catch (error) {
        console.log(`Broken ;( ${error}`)
    }
}

getData();
   
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        document.body.classList.remove('noscroll');
        hamburger.classList.remove('is-active');
        menu.classList.remove('show');
    } else {
        document.body.classList.add('noscroll');
        hamburger.classList.add('is-active');
        menu.classList.add('show');
    }
});

document.getElementById("appInfo").onclick = function(){
    /* Supporting Older IE Browsers */
    var request;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
        }
    else {
        request = new  ActiveXObject("Microsoft.XMLHTTP");
        }
    request.open('GET', 'assets/data/data.json');
    request.onreadystatechange = function(){
    if((request.readyState === 4) && (request.status === 200)){
        var items = JSON.parse(request.responseText);
        console.log(items);
        var output = "<ul>";
        for(var key in items)
         {
           output += "<li>" + items.name;
         }
           document.getElementById("app").innerHTML = output;
         }
        };		
        
    request.send();
    
}
// const button = document.querySelector('.app');
// document.getElementById("app").innerHTML = 'Download App'   