const express = require('express');
var authorsRouter = express.Router();
function router(nav){
var authors =
[
    {
        name:"Harper Lee",
        genre:"classic",
        era:"classic of modern American literature",
        description:"Nelle Harper Lee was an American novelist widely known for To Kill a Mockingbird, published in 1960. It won the 1961 Pulitzer Prize and has become a classic of modern American literature. Lee only published this one book, yet she was awarded the Presidential Medal of Freedom in 2017 for her contribution to literature.",
        country:"America",
        image:"harperlee.jpg"
    },
    {
        name:"Ayn Rand ",
        genre:"classic",
        era:"classic Era",
        description:"yn Rand was a Russian-American writer and philosopher. She is known for her two best-selling novels, The Fountainhead and Atlas Shrugged, and for developing a philosophical system she named Objectivism. Educated in Russia, she moved to the United States in 1926. She had a play produced on Broadway in 1935 and 1936.",
        country:"Russian-American ",
        image:"aynrand.jpg"
    },
    {
        name:"Paulo coelho ",
        genre:"Modern",
        era:"Modern Era",
        description:"Paulo Coelho de Souza is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation.",
        country:"Brazilian lyricist",
        image:"paulo.jpg"
    },
    {
        name:" Jon Krakauer ",
        genre:"classic",
        era:"classic Era",
        description:"Jon Krakauer is an American writer and mountaineer. He is the author of best-selling non-fiction books—Into the Wild; Into Thin Air; Under the Banner of Heaven; and Where Men Win Glory: The Odyssey of Pat Tillman—as well as numerous magazine articles.",
        country:"American ",
        image:"jon krakauer.jpg"
    },
    {
        name:"Amish Tripathi",
        genre:"Modern",
        era:"Modern Era",
        description:"Amish Tripathi is an Indian columnist and author, known for his novels The Immortals of Meluha, The Secret of the Nagas, The Oath of the Vayuputras, Ram: Scion of Ishkvaku, Sita: Warrior of Mithila and .",
        country:"India",
        image:"amish.jpg"
    },

]

authorsRouter.route('/')
.get(function(req,res){
    res.render('authors.ejs',
        {nav,
        title:"Authors",
        authors
    }
)
});


authorsRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;

    res.render(
        'author',
        {
            nav,
            title: "Author Details",
            author: authors[id]
        }
    )
    
});

return authorsRouter;
}
module.exports =  router;