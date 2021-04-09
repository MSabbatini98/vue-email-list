//?  https://flynn.boolean.careers/exercises/api/random/mail
var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            email : "a",
            numero_email : null,
            email_list : [],
        },
        mounted :  function() {
            console.log(this.email_list);
            var self = this;
            for(var i = 0; i != 10; i++) {
                console.log(i);    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (answer) {

                    console.log(self.email_list);
                    self.email = answer.data.response;
                    self.email_list.push(self.email);
                    // self.email_list.push(self.email)
                })
            }
            
            }
        }
);