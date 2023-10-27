// // // const searchInput = document.getElementById("search");
// // // const novels = document.querySelectorAll(".card");
// // // const searchResults = document.getElementById("search-results");
// // // const resultItem = document.createElement("a");

// // // searchInput.onkeyup = function ({
    
// // //     let result = [];
// // //     let input = searchInput.Value;
// // //     if(input.length){
// // //     results = novel.querySelector("a").getAttribute("href");
// // //     keyword.include(input);
// // //     }
// // // });

// let availableKeywords = [
//     'the',
//     'modern',
//     'next',
//     'door',
// ];
// const searchInput = document.getElementById("search");
// const novels = document.querySelectorAll(".card");
// const searchResults = document.getElementById("search-results");

// searchInput.onkeyup = function () {
//     let result = [];
//     let input = searchInput.ariaValueMax;
//     if (input.length) {
//         result = availableKeywords.filter((keywords)=>{
//            return keywords.toLowerCase().includes(input.toLocaleLowerCase())
//         });

//     }

// }
// function display(result) {
//     const content = result.map((list) => {
//         return "<a>" + list + "</a";


//     });
//     searchResults.innerHTML = "ul" + content.join + "</ul>";
// }

// <!-- <script>let availableKeywords = [
//     'the',
//     'modern',
//     'next',
//     'door',
// ];
// const searchInput = document.getElementById("search");
// const novels = document.querySelectorAll(".card");
// const searchResults = document.getElementById("search-results");

// searchInput.onkeyup = function () {
//     let result = [];
//     let input = searchInput.ariaValueMax;
//     if (input.length) {
//         result = availableKeywords.filter((keywords)=>{
//            return keywords.toLowerCase().includes(input.toLocaleLowerCase())
//         });

//     }

// }
// function display(result) {
//     const content = result.map((list) => {
//         return "<a>" + list + "</a";


//     });
//     searchResults.innerHTML = "ul" + content.join + "</ul>";
// }</script> -->

// <!-- <script>
//     const searchInput = document.getElementById("search");
//     const novels = document.querySelectorAll(".card");
//     const searchResults = document.getElementById("search-results");

//     searchInput.addEventListener("input", (e) => searchData(e.target.value));

//     function searchData(search) {
//         searchResults.innerHTML = ""; 
//         searchResults.style.display = "none"; // persembunyian

//         novels.forEach((novel) => {
//             var jsku = document.getElementsByClassName('jsku');
//             jsku.style.back

//             const title = novel.querySelector(".card-title").textContent.toLowerCase();
//             if (title.includes(search.toLowerCase())) {
//                 const resultItem = document.createElement("a");
//                 resultItem.className = "dropdown";
//                 resultItem.href = "#"; //link
//                 resultItem.textContent = novel.querySelector(".card-title").textContent;
//                 searchResults.appendChild(resultItem);
//             }
//         });

//         if (search.length > 0) {
//             searchResults.style.display = "block"; // hasil coy
//         }
//     }
    
// </script> -->