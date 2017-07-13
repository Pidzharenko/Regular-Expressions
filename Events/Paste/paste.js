tabsBody.addEventListener("paste", function(e){// вызываю событие на элементи
       var contenteditableTarget = d.querySelectorAll('.contenteditable'),
           contenteditableTarget,
           i;

           for(i = 0; i < contenteditableTarget.length; i++){
               
               setTimeout(clearContentEditable,1000,i);//setTimeout помогает правильно сработать событию. Также 3 параметр и далее указуют какие параметры нужно передать в  clearContentEditable.
           }

       function clearContentEditable(i){
           contenteditableTarget[i].innerHTML = t.clearText.formatContent(contenteditableTarget[i].innerHTML);
       }

     });