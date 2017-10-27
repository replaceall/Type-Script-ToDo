window.onload=function () {

    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');
    var status = true;
    var price = 20;
    btn.onclick = function () {
        var value = input.value;
        additem(value, status);
        displayItem();

        var complete_todo = document.createElement("div");
        complete_todo.setAttribute("id", nextid);
        complete_todo.setAttribute("class","main");

        var sub_todo=document.createElement("div");
        sub_todo.setAttribute("id","sub_todo"+nextid);
        sub_todo.setAttribute("class","input");

         var para=document.createElement("p");
         para.setAttribute("class","para");
         para.setAttribute("id","para"+nextid);
         para.setAttribute("contenteditble",false);
         sub_todo.appendChild(para);
         para.innerHTML = value;
         //input.innerHTML=null;

        var sub_div=document.createElement("div");
        sub_div.setAttribute("id","sub_div"+nextid);
        sub_div.setAttribute("class","thumbnails");

        var delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
       // delete_button.setAttribute("id", "delete" + nextid);
        delete_button.setAttribute("id","delete");
        delete_button.setAttribute("onclick","Delete_todo("+nextid+")")

        var modify_button = document.createElement("button");
        modify_button.innerText = "Modify";
        modify_button.setAttribute("id", "modify" + nextid);
        modify_button.setAttribute("class","modify");
        modify_button.setAttribute("onclick","Modify_todo("+nextid+");");

        var mark_button = document.createElement("button");
        mark_button.innerText = "Mark As Done";
        mark_button.setAttribute("id", "mark" + nextid);
        mark_button.setAttribute("class","mark");
        mark_button.setAttribute("onclick","Mark_todo("+nextid+");");

        complete_todo.appendChild(sub_todo);
        sub_div.appendChild(delete_button);
        sub_div.appendChild(mark_button);
        sub_div.appendChild(modify_button);
        complete_todo.appendChild(sub_div);


        var item_complete = document.getElementById("added");
        item_complete.appendChild(complete_todo);

    }
    function  Delete_todo(id) {
        var delet=document.getElementById(id);
        delet.parentNode.removeChild(delet);
    }

    function  Mark_todo(id) {
        var mark=document.getElementById(id);
        mark.style.backgroundColor="green";

        var markk=document.getElementById("mark"+id);
        markk.innerHTML="Completed";
        //mark.innerText="Completed";
    }

    function Modify_todo(id) {
        //document.getElementById("para"+id).innerText.select();
        SelectText("para"+id);
        var added=document.getElementById("id");
        var modifi=document.getElementById("sub_todo"+id);
        var para=document.getElementById("para"+id);
        para.setAttribute("contenteditable",true);

        var btn=document.createElement("button");
        btn.setAttribute("id","btn"+id);
        btn.innerHTML="submit";
        btn.setAttribute("onclick","modified_function("+id+")");

        var sub_div=document.getElementById("sub_div"+id);
        sub_div.replaceChild(btn,sub_div.childNodes[2]);


    }
    function  modified_function(id) {

        var para=document.getElementById("para"+id);
        para.setAttribute("contenteditable",false);
       // para.style.backgroundColor="antiquewhite";
        var mark=document.getElementById(id);
        mark.style.backgroundColor="antiquewhite";
        var btn=document.createElement("button");
        btn.setAttribute("id","modify"+id);
        btn.innerHTML="Modify";
        btn.setAttribute("onclick","Modify_todo("+id+")");
       // btn.setAttribute("onclick",document.getElementById("para"+id).value().select());
        var markk=document.getElementById("mark"+id);
        markk.innerHTML="Mark As Todo";

        var sub_div=document.getElementById("sub_div"+id);
        sub_div.replaceChild(btn,sub_div.childNodes[2]);

    }
    function SelectText(element) {

        var doc = document
            , text = doc.getElementById(element)
            , range, selection
        ;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }


    window.Mark_todo=Mark_todo;
    window.Delete_todo=Delete_todo;
    window.Modify_todo=Modify_todo;
    window.modified_function=modified_function;
    window.Selecttext=SelectText;
}
