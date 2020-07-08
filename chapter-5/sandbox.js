// 41) Objects in Arrays

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 rules to life', likes: 84},
// ];

// console.log(blogs);

let user = {
    name: 'mark',
    age: 22, 
    email: 'markt1084@gmail.com',
    location: 'orlando',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30},
        { title: '10 rules to life', likes: 84},
    ],


    login : function(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user looged out');
    },
    logBlogs(){ 

        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();