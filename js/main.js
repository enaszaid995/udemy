function mySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    search = document.getElementById("menusearch");
    li = ul.getElementsByTagName("li");

   
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            search.style.display = "block";
            ul.style.display="block";
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function showSide(){
    var sidenav = document.getElementById("sidenav");
  
    var trash = document.getElementById("trash");

        trash.addEventListener("click", function() {
        var elems = document.querySelectorAll(".brightness");
        var elemss = document.querySelectorAll("section");
        for (var i =0;i < elems.length; i++) {
            elems[i].style.filter = "brightness(50%)";
            elemss[i].style.filter = "brightness(50%)";
        }
        });
   
    sidenav.style.visibility ="visible";
}

function hideSide(){
    var sidenav = document.getElementById("sidenav");
  
    var cancel = document.getElementById("cancel");

        cancel.addEventListener("click", function() {
        var elems = document.querySelectorAll(".brightness");
        var elemss = document.querySelectorAll("section");
        for (var i =0;i < elems.length; i++) {
            elems[i].style.filter = "brightness(100%)";
            elemss[i].style.filter = "brightness(100%)";
        }
        });
   
    sidenav.style.visibility ="hidden";
}
const links =[
    {
        "head":"Expand your career opportunities with Python",
        "pargraph":"Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was...",
        "spann":"python",

    },

    {
        "head":"Analyze and visualize data with Excel",
        "pargraph":"Regardless of the industry you work in, Microsoft Office Excel is an invaluable spreadsheet program for organizing and representing data. Excel offers functions, formulas, and pivot tables to help you aggregate and then analyze large sets of information. Excel first truly appeared on the scene way back in 1987, when a version...",
        "spann":"Excel",

    },
    {
        "head":"Build websites and applications with Web Development",
        "pargraph":"The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on....",
        "spann":"web development",
    }
]

      var courseHead= document.getElementById("detailC1");
      var coursePAr = document.getElementById("detailC2");
      var courseSpan = document.getElementById("detailC3");
      var cimg = document.getElementById("ima");
      
      var swiperr = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          769: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });    

      document.getElementById("login").addEventListener('click' , function(e){
          document.location = 'login.html';
      })

     document.getElementById("mainswiper").innerHTML =python();
   
function python(){
   
    for(var i = 0 ; i <links.length ; i++){
        if(links[i].spann== "python"){
            courseHead.innerHTML = links[i].head;
            coursePAr.innerHTML = links[i].pargraph;
            courseSpan.innerHTML = " "+links[i].spann;
        }
      }
      getPythonCourse("data.json");
      // getCourse("http://fakeapi.jsonparseronline.com/posts");
  }
        

  
    function getPythonCourse(url){
        fetch(url)
         .then(response => response.json())
         .then(data => {
             data.forEach(item => {
                // var t = JSON.stringify(item.title);
                // var i = JSON.stringify(item.imageUrl);
                if(item.type == "python"){
                    var i = JSON.stringify(item.image);
                    var t = JSON.stringify(item.title);
                    var a = JSON.stringify(item.auther);
                    var p = JSON.stringify(item.price);
                    var r = JSON.stringify(item.range);
                   
                    console.log(i,t,a,p,r);
                    showCourse(i,t,a,p,r);
                }
                

             });
            
             
         });
    }
    function showCourse(img,title,auther,price,range){
        var swipjer = document.getElementById("mainswiper");
       
        var tsl = title.slice(0,20)+"...";
        ;
        const courseEl = document.createElement("div");
        courseEl.classList.add("swiper-slide");
        courseEl.classList.add("python");
        courseEl.innerHTML = `<img src = ${img} >
                                <h5><a href="course.html" onclick="singleData(${img},${tsl},${auther})>${tsl} </a></h5> 
                                <p class="text-muted">${auther}</p>
                                <div class="star>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                </div>
                                <strong>${price}</strong>
        `;
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
                parent.remove();
            }
        }
        const container = document.querySelectorAll('.excel');
        for (const i in container) {
            removeAllChildNodes(container[i]);
        }

        const containerr = document.querySelectorAll('.web');
    for (const i in containerr) {
        removeAllChildNodes(containerr[i]);
    }
        
                    swipjer.insertBefore(courseEl, swipjer.firstChild);
                   
        }
     
        // document.getElementById('excel').addEventListener("click",excel());
        function excel(){
           
    
            for(var i = 0 ; i <links.length ; i++){
                if(links[i].spann== "Excel"){
                    courseHead.innerHTML = links[i].head;
                    coursePAr.innerHTML = links[i].pargraph;
                    courseSpan.innerHTML = " "+links[i].spann;
                }
            }
            
            getExcelCourse("data.json");
        
        }
 

function getExcelCourse(url){
    // var ii =  document.getElementById("mainswiper");
    // var iii = document.getElementsByClassName('swiper-slide');
   
    fetch(url)
     .then(response => response.json())
     .then(data => {
         data.forEach(item => {
          
           
            if(item.type == "excel"){
                var i = JSON.stringify(item.image);
                var t = JSON.stringify(item.title);
                var a = JSON.stringify(item.auther);
                var p = JSON.stringify(item.price);
                var r = JSON.stringify(item.range);
               
                console.log(i,t,a,p,r);
             
                showExcelCourse(i,t,a,p,r);

               
            }
            

         });
        
         
     });
}

function showExcelCourse(img,title,auther,price,range){

    var swipjer = document.getElementById("mainswiper");
    
    var tsl = title.slice(0,20)+"...";
    // var swipjer = document.getElementById("coursei");
    const courseEl = document.createElement("div");
    courseEl.classList.add("swiper-slide");
    courseEl.classList.add("excel");
    courseEl.innerHTML = `<img src = ${img} >
                            <h5>${tsl}</h5> 
                            <p class="text-muted">${auther}</p>
                            <div class="star>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            </div>
                            <strong>${price}</strong>
    `;
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
            parent.remove();
        }
    }
    const container = document.querySelectorAll('.python');
    for (const i in container) {
        removeAllChildNodes(container[i]);
    }

    const containerr = document.querySelectorAll('.web');
    for (const i in containerr) {
        removeAllChildNodes(containerr[i]);
    }
                    swipjer.appendChild(courseEl);
                
    
    }
$('.broadlinks a').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('.broadlinks a.active').removeClass('active');
        $(this).addClass('active');    
    }
});

    function webDevelopmen(){
        for(var i = 0 ; i <links.length ; i++){
            if(links[i].spann== "web development"){
                courseHead.innerHTML = links[i].head;
                coursePAr.innerHTML = links[i].pargraph;
                courseSpan.innerHTML = " "+links[i].spann;
            }}

            getWebCourse("data.json");
        }


    
function getWebCourse(url){
    
    fetch(url)
     .then(response => response.json())
     .then(data => {
         data.forEach(item => {
          
           
            if(item.type == "web development"){
                var i = JSON.stringify(item.image);
                var t = JSON.stringify(item.title);
                var a = JSON.stringify(item.auther);
                var p = JSON.stringify(item.price);
                var r = JSON.stringify(item.range);
               
                console.log(i,t,a,p,r);
             
                showWebCourse(i,t,a,p,r);

               
            }
            

         });
        
         
     });
}

function showWebCourse(img,title,auther,price,range){

    var swipjer = document.getElementById("mainswiper");
    
    var tsl = title.slice(0,20)+"...";
    // var swipjer = document.getElementById("coursei");
    const courseEl = document.createElement("div");
    courseEl.classList.add("swiper-slide");
    courseEl.classList.add("web");
    courseEl.innerHTML = `<img src = ${img} >
                            <h5>${tsl}</h5> 
                            <p class="text-muted">${auther}</p>
                            <div class="star>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            </div>
                            <strong>${price}</strong>
    `;
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
            parent.remove();
        }
    }
    const container = document.querySelectorAll('.python');
    for (const i in container) {
        removeAllChildNodes(container[i]);
    }
    const containerr = document.querySelectorAll('.excel');
    for (const i in containerr) {
        removeAllChildNodes(containerr[i]);
    }
                    swipjer.appendChild(courseEl);
              
    
    }
  
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            centeredSlides: false,
            slidesPerGroupSkip: 1,
            grabCursor: true,
            keyboard: {
              enabled: true,
            },
            breakpoints: {
              769: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            },
            scrollbar: {
              el: ".swiper-scrollbar",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

    