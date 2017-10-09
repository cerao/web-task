







var category_name;
function show_filter() {
    var x = document.getElementById("base");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function open_wind(){
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}


function close_wind() {
    var modal = document.getElementById('myModal');
      modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
}

function add(){
    if (navigator.onLine) {
        var hr = new XMLHttpRequest();
        var url = "db.php";
        var fn = document.getElementById("same_payment").value;
        var ln = document.getElementById("amount").value;
        var fnn = document.getElementById("categoryID").value;
        var date = document.getElementById("dateID").value;
        var textID = document.getElementById("textID").value;

        if (count>0) {
            var vars = "same_payment="+array_same_payment+"&amount="+array_amount+"&categoryID="+array_categoryID+"&date="+array_dateID+"&textID="+array_textID;
            hr.open("POST", url, true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function() {
              if(hr.readyState == 4 && hr.status == 200) {
                var return_data = hr.responseText;
                if (return_data=='ok'){
                    close_wind();
                    if (category_name==fnn) {
                        category(category_name);
                    }
                }
                else{
                    alert("gtxovt sheavsot velebi")
                }
              }
            }
            hr.send(vars);
            document.getElementById("textID").innerHTML = "processing...";
        }
        else if (fn!='' && ln!='' && fnn!='' && date!=''){
            var vars = "same_payment="+fn+"&amount="+ln+"&categoryID="+fnn+"&date="+date+"&textID="+textID;
            hr.open("POST", url, true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function() {
              if(hr.readyState == 4 && hr.status == 200) {
                var return_data = hr.responseText;
                if (return_data=='ok'){
                    close_wind();
                    if (category_name==fnn) {
                        category(category_name);
                    }
                }
                else{
                    alert("gtxovt sheavsot velebi")
                }
              }
            }
            hr.send(vars);
            document.getElementById("textID").innerHTML = "processing...";
        }
        else{
            alert("sheavse velebi");
        }
    }else{
        if (fn!='' && ln!='' && fnn!='' && date!=''){
            array_same_payment=fn;
            array_amount=ln;
            array_categoryID=fnn;
            array_dateID=date;
            array_textID=textID;
        }
    }
}
function index(value){
    if (navigator.onLine) {
    
    
        category_name = value;
        var hr = new XMLHttpRequest();
        var url = "default.php";
        var clasname;
        var p=0;
        var vars = "category="+value;
        hr.open("POST", url, true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr.onreadystatechange = function() {
          if(hr.readyState == 4 && hr.status == 200) {
            var data = hr.responseText;
            
            
            try{
                data = JSON.parse(data);
                global_array = data;
            }catch(e){
                data=[];
            }
            //
            document.getElementById('record_id').innerHTML="";

            for (var i = 0; i < data.length; i++) {

                if (data[i][5]!='') {

                    clasname = 'comment';
                }
                else{
                    clasname = 'displayclas';
                }
                p +=parseInt(data[i][2]); 
            document.getElementById('record_id').innerHTML+='<div class="rocordDela"><div class="payrecord"><div class="Recordpayment"><div class="peytittle">'+data[i][1]+'</div><button class="filtrButton">'+value+'</button></div><div class="dategel"><div class="Moneytittle">'+data[i][3]+'</div><div class="Money">'+data[i][2]+'</div><div class="gel">GEL</div></div></div><div class="'+clasname+'"><div class="comTittle">coment:</div><div class="comText">'+data[i][5]+'</div></div></div>';
            }
            document.getElementById('payid').innerHTML=p;
          }
        }
        hr.send(vars);
    }else{
            document.getElementById('record_id').innerHTML="";

            for (var i = 0; i < global_array.length; i++) {

                if (global_array[i][5]!='') {

                    clasname = 'comment';
                }
                else{
                    clasname = 'displayclas';
                }
                p +=parseInt(global_array[i][2]); 
            document.getElementById('record_id').innerHTML+='<div class="rocordDela"><div class="payrecord"><div class="Recordpayment"><div class="peytittle">'+global_array[i][1]+'</div><button class="filtrButton">'+value+'</button></div><div class="dategel"><div class="Moneytittle">'+global_array[i][3]+'</div><div class="Money">'+global_array[i][2]+'</div><div class="gel">GEL</div></div></div><div class="'+clasname+'"><div class="comTittle">coment:</div><div class="comText">'+global_array[i][5]+'</div></div></div>';
            }
            document.getElementById('payid').innerHTML=p;
    }
}


function category(value){
    if (navigator.onLine) {

        var hr = new XMLHttpRequest();
        var url = "test.php";
        var clasname;
        var p=0;
        category_name = value;

        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var datefrom = document.getElementById("datefrom").value;
        var dateto = document.getElementById("dateto").value;
        var vars = "category="+value+"&from="+from+"&to="+to+"&datefrom="+datefrom+"&dateto="+dateto;
        hr.open("POST", url, true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr.onreadystatechange = function() {
          if(hr.readyState == 4 && hr.status == 200) {
            var data = hr.responseText;
            
            
            try{
                data = JSON.parse(data);
                global_array = data;
            }catch(e){
                data=[];
            }
            //
            document.getElementById('record_id').innerHTML="";

            for (var i = 0; i < data.length; i++) {

                if (data[i][5]!='') {

                    clasname = 'comment';
                }
                else{
                    clasname = 'displayclas';
                }
                p +=parseInt(data[i][2]); 
            document.getElementById('record_id').innerHTML+='<div class="rocordDela"><div class="payrecord"><div class="Recordpayment"><div class="peytittle">'+data[i][1]+'</div><button class="filtrButton">'+value+'</button></div><div class="dategel"><div class="Moneytittle">'+data[i][3]+'</div><div class="Money">'+data[i][2]+'</div><div class="gel">GEL</div></div></div><div class="'+clasname+'"><div class="comTittle">coment:</div><div class="comText">'+data[i][5]+'</div></div></div>';
            }
            document.getElementById('payid').innerHTML=p;
          }
        }
        hr.send(vars);
    }else{
            document.getElementById('record_id').innerHTML="";

            for (var i = 0; i < global_array.length; i++) {

                if (global_array[i][5]!='') {

                    clasname = 'comment';
                }
                else{
                    clasname = 'displayclas';
                }
                p +=parseInt(global_array[i][2]); 
            document.getElementById('record_id').innerHTML+='<div class="rocordDela"><div class="payrecord"><div class="Recordpayment"><div class="peytittle">'+global_array[i][1]+'</div><button class="filtrButton">'+value+'</button></div><div class="dategel"><div class="Moneytittle">'+global_array[i][3]+'</div><div class="Money">'+global_array[i][2]+'</div><div class="gel">GEL</div></div></div><div class="'+clasname+'"><div class="comTittle">coment:</div><div class="comText">'+global_array[i][5]+'</div></div></div>';
            }
            document.getElementById('payid').innerHTML=p;
    }
}


function filtersearch(){
    if (navigator.onLine) {
        var hr = new XMLHttpRequest();
        var url = "filtersearch.php";
        var searchID = document.getElementById("searchID").value;

        var vars = "searchID="+searchID;
        var name;
        hr.open("POST", url, true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr.onreadystatechange = function() {
          if(hr.readyState == 4 && hr.status == 200) {
            var data = hr.responseText;
            
            data = JSON.parse(data);
            global_array = data;
            document.getElementById('record_id').innerHTML="";
            for (var i = 0; i < data.length; i++) {
                if (data[i][4]==1) {
                    var name = 'foot';
                }
                if (data[i][4]==3) {
                    name = 'mobile services';
                }
                if (data[i][4]==2) {
                    name = 'gasoline';
                }
                if (data[i][4]==4) {
                    name = 'transport';
                }
                if (data[i][4]==5) {
                    name = 'charity';
                }
            document.getElementById('record_id').innerHTML+="<div class='rocordDela'><div class='payrecord'><div class='Recordpayment'><div class='peytittle'>"+data[i][1]+"</div><button class='filtrButton'>"+name+"</button></div><div class='Moneytittle'>"+data[i][3]+"</div><div class='Money'>"+data[i][2]+"</div><div class='gel'>GEL</div></div>"
            
            if (data[i][5]!='') {
                document.getElementById('record_id').innerHTML+="<div class='comment'><div class='comTittle'>coment:</div><div class='comText'>"+data[i][5]+"</div></div>";
            }
            document.getElementById('record_id').innerHTML+="</div>";
            }

          }
        }
        hr.send(vars);
    }else{
            document.getElementById('record_id').innerHTML="";
            for (var i = 0; i < global_array.length; i++) {
                if (global_array[i][4]==1) {
                    var name = 'foot';
                }
                if (global_array[i][4]==3) {
                    name = 'mobile services';
                }
                if (global_array[i][4]==2) {
                    name = 'gasoline';
                }
                if (global_array[i][4]==4) {
                    name = 'transport';
                }
                if (global_array[i][4]==5) {
                    name = 'charity';
                }
            document.getElementById('record_id').innerHTML+="<div class='rocordDela'><div class='payrecord'><div class='Recordpayment'><div class='peytittle'>"+global_array[i][1]+"</div><button class='filtrButton'>"+name+"</button></div><div class='Moneytittle'>"+global_array[i][3]+"</div><div class='Money'>"+global_array[i][2]+"</div><div class='gel'>GEL</div></div>"
            
            if (global_array[i][5]!='') {
                document.getElementById('record_id').innerHTML+="<div class='comment'><div class='comTittle'>coment:</div><div class='comText'>"+global_array[i][5]+"</div></div>";
            }
            document.getElementById('record_id').innerHTML+="</div>";
            }
    }
}