var names = document.getElementById('input');

names.addEventListener('input',function(e){
    
    var inputName = e.target.value.toUpperCase();
 //   console.log(inputName);
    var ul = document.getElementById('ul');
    var li = ul.querySelectorAll('#item_name');
    //console.log(li);
    for(var i=0;i<li.length;i++){
        //converts each item of list to uppercase
        var item = 
        li[i].getElementsByTagName('a')[0].innerText.toUpperCase();
        //console.log(item);
        //find if the input matches or not
        if(item.indexOf(inputName)<=-1){
            li[i].style.display="none";//hide the
        }else{
            li[i].style.display="";
        }
    }
});