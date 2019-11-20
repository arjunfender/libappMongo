
const express = require('express');//****creating server usign the express code */
const chalk = require('chalk');//***requring chalk module */
const path = require('path');//****require path */
const bodyparser = require('body-parser')//*****requiring body parser* */
const cors = require('cors');
var app = new express();// creating a consructor for the obect for express newwly created
var nav =[                      //****for books page****/
    {link:'/', title:'HOME'},
    {link:'/login', title:'Login'},
    {link:'/signup', title:'Sign-Up'},
    {link:'/aboutus', title:'About Us'},
    {link:'/books', title:'Books'},
    {link:'/authors', title:'Authors'},
    {link:'/books/addbook', title:'Add New Book'}
]

var mongoose = require('mongoose');

//****creating path to new folder for books */ 

const booksRouter = require('./src/routes/bookRoutes')(nav);// &passing nav to book router
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRouter')(nav);
const loginRouter = require('./src/routes/loginRouter')(nav);


app.use(express.static(path.join(__dirname,"/public")));// to receive css file from the public folder
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
app.use('/books',booksRouter);  ///******creating routers using express */
app.use('/authors',authorsRouter);
app.use('/signup', signupRouter);
app.use('/login',loginRouter);

mongoose.connect("mongodb+srv://arjunfender:<guitararjun@123>@cluster0-nvh7s.mongodb.net/test?retryWrites=true&w=majority")


app.set('views','./src/views');//changing view engine html to Ejs format ,in Rendering format into app set,and app get
app.set('view engine','ejs');





//***for index page */
app.get('/', function(req,res){
    res.render('index',
    
    {nav,title:"Library"        //*****changing navigational bar from HTML to Ejs */
    });                        //render is using instead of sendFile in the above code and passing the data through a Jsonn obeject
});



//*********page will work only this http://localhost:3000/books/single*** */
// booksRouter.route('/single')
// .get((req,res)=>{
//     res.send("sendeddd");
// })

// app.listen(3000, function(){
//     console.log('listening the port number 3000'+chalk.green('3000'));
// });                             //setting the port&callback function for running server and showing some message
app.listen(process.env.PORT||4000,()=>{
    console.log("listening to port "+chalk.green('process.env.PORT||4000')); 
//****installing new package chalk usgin sudo install command in terminal */
});