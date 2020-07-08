// 39) adding methods

let user = {
    name: 'mark', // key: value
    age: 22, 
    email: 'markt1084@gmail.com',
    location: 'orlando',
    blogs: ['why mac & cheese rules', '10 rules to life'],
    login : function(){
        console.log('the user logged in');
    },
    logout : function(){
        console.log('the user looged out');
    },
    logBlogs: function(){

    }
};

user.login();
user.logout();

const name = 'mark';
name.toUpperCase();
