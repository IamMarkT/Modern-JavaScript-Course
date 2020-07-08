// 40) 'this' keyword

let user = {
    name: 'mark', // key: value
    age: 22, 
    email: 'markt1084@gmail.com',
    location: 'orlando',
    blogs: ['why mac & cheese rules', '10 rules to life'],
    login : function(){
        console.log('the user logged in');
    },
    logout(){ // SAME AS logout : function(){
        console.log('the user looged out');
    },
    logBlogs(){ 
        // when this is used has to be function notation
        // not arrow notation

        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.logBlogs();
// console.log(this);