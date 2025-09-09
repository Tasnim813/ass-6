

const bookMarkContainer = document.getElementById("bookmarkContainer")

const cartContainer = document.getElementById("cart-container")
bookmark = [];
cartContainer.addEventListener("click", (e) => {
  // console.log(e.target)
  if (e.target.innerText === 'Add to Cart') {
    handleBookmark(e)

  }
})

const handleBookmark = (e) => {
  console.log("btb clickeddd")
  const tittle = e.target.parentNode.parentNode.children[0].innerText;
  const id = e.target.parentNode.parentNode.id


  const price = e.target.parentNode.parentNode.children[2].children[1].children[0].innerText

  console.log(price)


  const totalPrice = document.getElementById('grand-total').innerText;

  const currentPrice = Number(totalPrice) + Number(price);

  document.getElementById('grand-total').innerText = currentPrice

  bookmark.push({
    tittle: tittle,
    id: id,
    price: price
  })

  showBookmark(bookmark)


}

const showBookmark = (Bookmarks) => {
  bookMarkContainer.innerHTML = "";
  Bookmarks.forEach(bookmark => {
    bookMarkContainer.innerHTML += `
    <div class=" bg-[#F0FDF4] m-5 p-5 rounded-xl ">
     <div class="flex items-center justify-between gap-5">
          <div>
          <h1 class="font-bold">${bookmark.tittle}</h1>
        <p>৳<span >${bookmark.price}</span></p>

        </div>
        <i onclick="handleDeletBookmark('${bookmark.id}')" class="fa-solid fa-xmark"></i>
        </div>
        </div>
      

    
    `
  })

}

const handleDeletBookmark = (BookmarkId) => {
  const deleteBookmark = bookmark.find(b =>b.id === BookmarkId) 

  const filterBookmark = bookmark.filter(bookmark => bookmark.id !== BookmarkId)

  bookmark = filterBookmark
  const totalPrice = document.getElementById('grand-total').innerText;
  const newTotal = Number(totalPrice) - Number(deleteBookmark.price);
  document.getElementById('grand-total').innerText = newTotal;

  showBookmark(bookmark)

}



// another section 


const catagoryLoad = () => {
  const url = "https://openapi.programming-hero.com/api/categories"
  fetch(url)
    .then(res => res.json())
    .then(data => displayCatagoryLoad(data.categories))

}



const loadTreeDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  console.log(url);

  const res = await fetch(url);
  const details = await res.json();

  // console.log(details.plants); 
  displayloadTreeDetail(details.plants);
};

const displayloadTreeDetail = (plant) => {
  console.log(plant);

  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
    <div>
      <h1 class="font-bold text-xl">${plant.name}</h1>
      <img src="${plant.image}" alt="${plant.name}" class="w-full h-48 object-cover rounded-lg my-3">
      <p><b>Category:</b> ${plant.category}</p>
      <p><b>Price:</b> ${plant.price} Tk</p>
      <p><b>Description:</b> ${plant.description || "No description available."}</p>
    </div>
  `;

  document.getElementById("word_modal").showModal();
};



const loadCart = (id) => {




  console.log(id)
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
      displayloadCart(data.plants)
    })
    .catch(err => {
      console.log(err);
    
    })

}

const displayloadCart = (articles) => {

  console.log(articles)
  const cartConatainer = document.getElementById("cart-container")
  cartConatainer.innerHTML = "";
  for (let article of articles) {
    console.log(article)
    const Allcart = document.createElement("div")
    Allcart.innerHTML = `
         <div>
        <div class="card bg-base-100  shadow-sm mb-5 md:mb-0 md:h-[590px]">
  
    <img src="${article.image}" alt="" class="rounded-3xl h-[250px] p-5" />
  
  <div class="card-body " id="${article.id}">
    <h2 onclick="loadTreeDetail(${article.id})" class="card-title font-bold" id="${article.id}">${article.name}</h2>
    <p class="text-[#1F2937]">${article.description}</p>
    <div class=" items-center flex justify-between">
      <button class="btn rounded-3xl bg-[#DCFCE7] text-[#15803D]">${article.category}</button>
      <h1 class=" text-xl">৳<span>${article.price}</span></h1>

    </div>
    <div class="card-actions">
      <button class="btn bg-[#15803D] w-full text-white rounded-3xl">Add to Cart</button>
    </div>
  </div>
</div>
      </div>
      
        
        `;
    cartConatainer.append(Allcart)
 
  }
    



}


const loadAllTree = (id) => {

  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
   
      displayloadAllTree(data.plants)
    })
 
}

const displayloadAllTree = (carts) => {
  console.log(carts)
  const cartConatainer = document.getElementById("cart-container")
  cartConatainer.innerHTML = "";
  for (let cart of carts) {
    console.log(cart)
    const Allcart = document.createElement("div")
    Allcart.innerHTML = `
         <div>
        <div class="card bg-base-100  shadow-sm  mb-5 md:mb:0 md:h-[590px]">
  
    <img src="${cart.image}" alt="" class="rounded-3xl h-[250px] p-5" />
  
  <div class="card-body "  id="${cart.id}">
    <h2 onclick="loadTreeDetail(${cart.id})" class="card-title font-bold" id="${cart.id}">${cart.name}</h2>
    <p class="text-[#1F2937]">${cart.description}</p>
    <div class=" items-center flex justify-between">
      <button class="btn rounded-3xl bg-[#DCFCE7] text-[#15803D]">${cart.category}</button>
      <h1 class=" text-xl">৳<span>${cart.price}</span></h1>

    </div>
    <div class="card-actions">
      <button class="btn bg-[#15803D] w-full text-white rounded-3xl">Add to Cart</button>
    </div>
  </div>
</div>
      </div>
      
        
        `;
    cartConatainer.append(Allcart)


  }
  // manageSpinner(false)


}




const displayCatagoryLoad = (sections) => {
  console.log(sections)
  const catagoryContainer = document.getElementById("catagori-container")
  catagoryContainer.innerHTML = `
    <h1 class="font-bold ml-5  ">Categories</h1>
    <button  onclick="loadAllTree()" class="hover:bg-[#15803D] p-[10px] hover:w-[200px] hover:text-white hover:text-left ml-3">All Trees</button>
    `;

  for (let section of sections) {
    console.log(section)
    const p = document.createElement("p")
    p.innerHTML = `
        <button id="${section.id}" class="p-5" >
        ${section.category_name}</button>
        
        `;
    catagoryContainer.append(p)
  }
  catagoryContainer.addEventListener('click', (e) => {
    const allbtn = document.querySelectorAll("button")
    allbtn.forEach(btn => {
      btn.classList.remove("active")
    })

    if (e.target.localName === "button") {
      // console.log(e.target.id)
      e.target.classList.add("active")

      loadCart(e.target.id)
    }
  })


}


catagoryLoad()
loadAllTree();
