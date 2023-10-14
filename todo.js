var list = document.getElementById("liste")

function button(){
    var yazi = document.getElementById("input").value //yazı değişkenimiz butona basınca değişecek demek,inputa yazdığımız yazıyı çektik
    var listedekiyazi = document.createTextNode(yazi) // li elementinin içine yazılacak yazı
    var x = document.createElement("li"); //yeni bir eleman yaratıyor
    

    x.appendChild(listedekiyazi) // <li> elementinin içerisine inputtan aldığımız yazıyı koyduk
    
    list.appendChild(x) //listenin içerisine (ul) oluşturduğumuz yapıyı koyduk. x=<li>Yazi</li>

}


function button2(){
      
    list.removeChild(list.lastElementChild)

}
