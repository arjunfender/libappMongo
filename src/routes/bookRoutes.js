const express = require('express');
var booksRouter = express.Router();
var {addbookmodel} = require('../models/AddBookModel');

//*******listing books********* */
function router(nav){
var books = [
    {
        title:"To kill a mocking bird",
        genere:"Southern Gothicic",
        author:"Harper Lee",
        image:"mockingbird.jpg",
        content:"TTo Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize. "
    },
    {
        title:"The Fountainhead",
        genere:"Psychological Fiction",
        author:"Ayn Rand",
        image:"fountainhead.jpg",
        content:"The Fountainhead is a 1943 novel by Russian-American author Ayn Rand, her first major literary success. The novel's protagonist, Howard Roark, is an individualistic young architect who designs modernist buildings and refuses to compromise with an architectural establishment unwilling to accept innovation. "  },
    {
        title:"The Alchemist",
        genere:"Fantasy Fiction",
        author:"Paulo Coelho",
        image:"alchemist.jpg",
        content:"The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. "
    },
    {
        title:"Into The wild",
        genere:"Fantasy Fiction",
        author:" Jon Krakauer",
        image:"intothewild.jpg",
        content:"Christopher McCandless, a young graduate, decides to renounce all his possessions and hitchhike across America. During his journey, he encounters several situations which change him as a person."
    },
    {
        title:"Shiva Trilogy",
        genere:" Fairy tale",
        author:"Amish Tripathi",
        image:"sivatriology.jpg",
        content:"The Immortals of Meluha is the first novel of the Shiva trilogy series by Amish Tripathi. The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth. "

    },
]
//******creating path to /Books page*****   */
booksRouter.route('/')
.get(function(req,res){

    addbookmodel.find((err,data)=>{
        if(err)
        {
            res.send("error");
        }
        else{
            books=data;
            res.render(
                'books',
                {nav:nav,
                title:"Books",
                books
       
        })
        }   
    })

   
});

//****creating routes for single book**_---- */
booksRouter.route('/save')
.post((req,res)=>{

    
 res.header("Addess-control-Allow-origin", "*");
 res.header('Access-control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
 var addbook = new addbookmodel(req.body);//creating object as student
//  addbook.save()//passing values to db
                 //  console.log(req.body);
    addbook.save((error,data)=>{
        if(error)
        {
       
        res.json({"status":"error"});
        //throw error;
        }
        else
        {

        res.json({"status": "success"});
         }
})

 res.send(req.body);
    console.log(req.body);
})

booksRouter.route('/addbook')
.get((req,res)=>{
    const id = req.params.id;

    res.render(
        'addbook',
        {
            nav,
            title:"Adding New Book"
        }
    );
    
})

booksRouter.get('/viewallapi',(req,res)=>{

    addbookmodel.find((err,data)=>{
        if(err)
        {
            res.send("error");
        }
        else{
            res.send(data);
        }
    })
})
booksRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;   //const {id} = req.param;

    res.render(
        'book',
        {
            nav,
            title:"Books",
            book: books[id],
            
        }
    )   
})

return booksRouter;
}
module.exports =  router;   