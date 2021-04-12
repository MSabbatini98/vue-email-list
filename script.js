//?  https://flynn.boolean.careers/exercises/api/random/mail
const email_numbers = parseInt(prompt("Inserisci il numero di email casuali che vuoi ricevere"));
document.getElementById("output").innerHTML=email_numbers;
var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            email : "a",
            email_list : [],
        },
        mounted :  function() {
            console.log(this.email_list);
            var self = this;
            for(var i = 0; i != email_numbers; i++) {
                console.log(i);    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (answer) {

                    // console.log(self.email_list);
                    self.email = answer.data.response;
                    self.email_list.push(self.email);
                    // self.email_list.push(self.email)
                })
            }
            console.log(this.email_list.lenght);
            }
        }
);