
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");
const novels = [
    { title: "The Vexations of a Shut-In Vampire Princess - Volume 01", link: "hikikomari/TOC.html" },
    { title: "The Vexations of a Shut-In Vampire Princess - Volume 02", link: "hikikomari/TOC.html" },
    { title: "The Vexations of a Shut-In Vampire Princess - Volume 03", link: "hikikomari/TOC.html" },
    { title: "The Vexations of a Shut-In Vampire Princess - Volume 04", link: "hikikomari/TOC.html" },
    { title: "modern vilains", link: "modern/TOC-modern.html" },

    // Add more book titles and links here
];

searchInput.addEventListener("input", function () {
    const input = searchInput.value.toLowerCase();
    const result = novels.filter(novel => novel.title.toLowerCase().includes(input));
    displayAutocomplete(result);
});

function displayAutocomplete(results) {
    searchResults.innerHTML = "";
    if (results.length > 0) {
        const autocompleteList = results.map(result => {
            return `<div class="autocomplete-item" onclick="navigateToLink('${result.link}')">${result.title}</div>`;
        }).join("");
        searchResults.innerHTML = autocompleteList;
        searchResults.style.display = "block";
    } else {
        searchResults.style.display = "none";
    }
}

// function navigateToLink(link) {
//     window.location.href = link;
// }
// $(document).bind("contextmenu",function(e) {
//     e.preventDefault();
//    });
   
//    $(document).keydown(function(e){
//        if(e.which === 123){
//           return false;
//        }
//    });
//    $(document).bind("contextmenu",function(e) {
// e.preventDefault();
// });
// $(document).keydown(function(e){
//  if(e.ctrlKey && (e.which === 83)){
//     e.preventDefault();
//     return false;
//  }
// });
// document.onkeydown = function(e) {
// if(event.keyCode == 123) {
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
// return false;
// }
// if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
// return false;
// }
// }

// const searchInput = document.getElementById("search");
// const novels = document.querySelectorAll(".card");
// const searchResults = document.getElementById("search-results");

// searchInput.addEventListener("input", (e) => searchData(e.target.value));

// function searchData(search) {
//     searchResults.innerHTML = ""; // Clear previous search results

//     if (search.trim() === "") {
//         searchResults.style.display = "none"; // Hide results if the search input is empty
//         return;
//     }

//     novels.forEach((novel) => {
//         const title = novel.querySelector(".card-title").textContent.toLowerCase();
//         if (title.includes(search.toLowerCase())) {
//             const resultItem = document.createElement("a");
//             resultItem.className = "dropdown";
//             resultItem.href = novel.querySelector("a").getAttribute("href"); // Mengambil URL dari card yang cocok
//             resultItem.textContent = novel.querySelector(".card-title").textContent;
//             searchResults.appendChild(resultItem);

//             // Menambahkan event handler untuk mengarahkan ke URL saat hasil pencarian diklik
//             resultItem.addEventListener("click", () => {
//                 window.location.href = resultItem.href;
//             });
//         }
//     });

//     if (search.length > 0) {
//         searchResults.style.display = "block"; // Show results if there are matches
//     } else {
//         searchResults.style.display = "none"; // Hide results if the search input is empty
//     }
// }




//         const searchInput = document.getElementById("search");
//         const novels = document.querySelectorAll(".card");
//         const searchResults = document.getElementById("search-results");

//         searchInput.addEventListener("input", (e) => searchData(e.target.value));

//         function searchData(search) {
//             searchResults.innerHTML = "";

//             novels.forEach((novel) => {
//                 const title = novel.querySelector(".card-title").textContent.toLowerCase();
//                 if (title.includes(search.toLowerCase())) {
//                     const resultItem = document.createElement("a");
//                     resultItem.className = "dropdown";
//                     resultItem.href = novel.querySelector("a").getAttribute("href"); // Mengambil URL dari card yang cocok
//                     resultItem.textContent = novel.querySelector(".card-title").textContent;
//                     searchResults.appendChild(resultItem);

//                     // Menambahkan event handler untuk mengarahkan ke URL saat hasil pencarian diklik
//                     resultItem.addEventListener("click", () => {
//                         window.location.href = resultItem.href;
//                     });
//                 }
//             });
//             function clearList() {
//                 while (card-title) {
//              function clearList(){
//                         // looping through each child of the search results list and remove each child
//                         while (list.firstChild){
//                             list.removeChild(list.firstChild)
//                         }
//                     }
//                 }
//             }

//             if (search.length > 0) {
//                 searchResults.style.display = "block";
//                 ret
//             } else if (search.length === 0) {
//                 searchResults.style.display = "none";
//             } else {
//                 clearList()
//                 location.reload();
//                 return false;
//             }
            
// }



// js login
document.getElementById('login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual user authentication logic on the server.
    if (username === 'Wign' && password === '1134') {
        document.getElementById('login-message').textContent = 'Login successful. Redirecting...';

        // You can redirect to your main page here.
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        document.getElementById('login-message').textContent = 'Login failed. Please check your credentials.';
    }
});
// login end




// function clearList(){
//     // looping through each child of the search results list and remove each child
//     while (list.firstChild){
//         list.removeChild(list.firstChild)
//     }
// }
// searchInput.addEventListener("input", (e) => {
//     // inside, we will need to achieve a few things:
//     // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
//     let value = e.target.value

//     // 2. check: if input exists and if input is larger than 0
//     if (value && value.trim().length > 0) {
//         // 3. redefine 'value' to exclude white space and change input to all lowercase
//         value = value.trim().toLowerCase()
//         // 4. return the results only if the value of the search is included in the person's name
//         // we need to write code (a function for filtering through our data to include the search input value)
//     } else {
//         // 5. return nothing
//         clearList()

//     }

// })
// clearButton.addEventListener("click", () => {
//     clearList()
// })


// const searchInput = document.getElementById("search");
// const novels = document.querySelectorAll(".card");
// const searchResults = document.getElementById("search-results");

// searchInput.addEventListener("input", (e) => searchData(e.target.value));

// function searchData(search) {
//     searchResults.innerHTML = "";

    // novels.forEach((novel) => {
    //     const title = novel .querySelector(".card-title").textContent.toLowerCase();
    //     if (title.includes(search.toLowerCase())) {
    //         const resultItem = document.createElement("a");
    //         resultItem.className = "dropdown";
    //         resultItem.href = novel.querySelector("a").getAttribute("href"); // Mengambil URL dari card yang cocok
    //         resultItem.textContent = novel.querySelector(".card-title").textContent;
    //         searchResults.appendChild(resultItem);

    //         // Menambahkan event handler untuk mengarahkan ke URL saat hasil pencarian diklik
    //         resultItem.addEventListener("click", () => {
    //             window.location.href = resultItem.href;
    //         });
    //     }
    // });

    // if (search.length > 0) {
    //     searchResults.style.display = "block";
    // } else {
    //     searchResults.style.display = "none";
    // }




//   const searchInput = document.getElementById("search");
//   const novels = document.querySelectorAll(".card");

//   searchInput.addEventListener("input", (e) => searchData(e.target.value));

//   function searchData(search) {
//     novels.forEach((novel) => {
//       const title = novel.querySelector(".card-title").textContent.toLowerCase();
//       if (title.includes(search.toLowerCase())) {
//         novel.classList.remove("d-none");
//       } else {
//         novel.classList.add("d-none");
//       }
//     });
//   }



//   const searchInput = document.getElementById("search");
//   const novels = document.querySelectorAll(".card");
//   const resultContainer = document.getElementById("novel");

//   searchInput.addEventListener("input", (e) => searchData(e.target.value));

//   function searchData(search) {
//     resultContainer.innerHTML = "novel"; // Bersihkan hasil sebelum menambahkan yang baru

//     novels.forEach((novel) => {
//       const title = novel.querySelector(".card-title").textContent.toLowerCase();
//       if (title.includes(search.toLowerCase())) {
//         const clonedNovel = novel.cloneNode(true);
//         clonedNovel.classList.remove("d-none");
//         resultContainer.appendChild(clonedNovel);
//       } else {
//         novel.classList.add("d-none");
//       }
//     });
//   }


//   const searchInput = document.getElementById("search");
//   const novels = document.querySelectorAll(".card");
//   const resultContainer = document.getElementById("search-results");

//   searchInput.addEventListener("input", (e) => searchData(e.target.value));

//   function searchData(search) {
//     resultContainer.innerHTML = ""; // Bersihkan hasil sebelum menambahkan yang baru

//     novels.forEach((novel) => {
//       const title = novel.querySelector(".card-title").textContent.toLowerCase();
//       if (title.includes(search.toLowerCase())) {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.className = "dropdown";
//         a.href = "#"; // Gantilah dengan URL yang sesuai
//         a.textContent = novel.querySelector(".card-title").textContent;
//         li.appendChild(a);
//         resultContainer.appendChild(li);
//         novel.classList.remove("d-none");
//       } else {
//         novel.classList.add("d-none");
//       }
//     });
//   }

