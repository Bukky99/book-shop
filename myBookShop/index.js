
const books = [
    {name: 'Queenie', author: 'Candie Carty-Williams', price: '£0.99', description: "THE SUNDAY TIMES BESTSELLER SHORTLISTED FOR THE COSTA FIRST NOVERL AWARD LONGLISTED FOR THE WOMEN\'S PRIZE FOR FICTION 'Hilarious, compelling, painful, enlightening, honest. I loved it' - Dolly Alderton 'Brilliant, timely, funny, heartbreaking' - Jojo Moyes 'A deliciously funny, characrterful and topical", image:'"http://books.google.com/books/content?id=NhBmDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'},
    {name:'The Girl Who Smiled Beads', author:'Clemantine Wamariya, Elizabeth Weil', price: '£3.99', description: "When Clemantine Wamariya six years old, her world was torn apart. She didn's know why her parents began talking in whispers, or why her neighbours started disappearing, or why she could her distant thunder even when the skies were clear. As the Rwandan Civil war raged, Clemantine and her sister", image:'http://books.google.com/books/content?id=djc_DwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'},
    {name:'Americanah', author: 'Chimamanda Ngozi Adichie', price: '£3.49', description: "SHORTLISTED FOR THE BAILEY'S WOMEN'S PRIZES FOR FICTION 'A delicious, imprtant novel' Ths Times 'Alert, alive and gripping' Independent 'Some novel tell a great story and others make you change the way you look at the world. Americanah does both.", image: 'http://books.google.com/books/content?id=QXHwNEB2CkYC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'},
  ]
  
  function mapBook(shop){
    return shop.name.author.price.description.image;
  }
  // or shorter code is const mapBook = shop => shop.name.author.price.description.image
  
  //const mapBook = books.map(shop);
  //console.log(shop)
  function bookFunction(){
      document.getElementsByClassName('addbtn').innerHTML = books.map(mapBook);
  }
  //let button = document.createElement('button'); 