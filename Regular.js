 var removeStyle = function(content) {// ф-я для поиска замены значения атрибута style на нужные свойства.
        
        var replaceFunction = function(str){//str хранит отпарсенный текст
            var attribute = "",
                arrayRE   = [ /font-weight: bold;/gi, /font-style: italic;/gi, /text-decoration-line: underline;/gi ];// массив свойств что нужны в регулярке

            for(var i = 0; i < arrayRE.length; i++){
               if(str.match(arrayRE[i]) !== null){
                    attribute += str.match(arrayRE[i]);// перебираю и конкатинирую найденные свойства
               } 
            }
            
           return "style= '"+attribute+"'";// отправляю все найденные свойства.
            
        }

        return content.replace(/style=["'][^"']*?["']/gmi, replaceFunction)// находим нужный текст по правилам регулярки и заменяем на.
            .replace(/\s+?>/gmi, ">");
    };