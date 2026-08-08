/* ===================================
   PAGE LOADER
=================================== */


window.addEventListener("load",()=>{


    const loader = document.querySelector(".loader");


    setTimeout(()=>{


        loader.classList.add("hide");


    },1500);



});





/* ===================================
   BACKGROUND MUSIC
=================================== */


const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");


let musicPlaying = false;




if(musicBtn){


musicBtn.addEventListener("click",()=>{


    if(!musicPlaying){


        bgMusic.play();


        musicBtn.innerHTML =
        '<i class="ri-volume-up-fill"></i>';


        musicPlaying = true;


    }


    else{


        bgMusic.pause();


        musicBtn.innerHTML =
        '<i class="ri-volume-mute-fill"></i>';


        musicPlaying = false;


    }


});

}





/* ===================================
   MOBILE MENU
=================================== */


const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");




if(menuBtn){


menuBtn.addEventListener("click",()=>{


    mobileMenu.classList.toggle("active");



    if(mobileMenu.classList.contains("active")){


        menuBtn.innerHTML =
        '<i class="ri-close-line"></i>';


    }


    else{


        menuBtn.innerHTML =
        '<i class="ri-menu-3-line"></i>';


    }



});

}




/* CLOSE MOBILE MENU ON CLICK */


const mobileLinks =
document.querySelectorAll(".mobile-menu a");



mobileLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        mobileMenu.classList.remove("active");


        menuBtn.innerHTML =
        '<i class="ri-menu-3-line"></i>';



    });


});
/* ===================================
   STICKY HEADER
=================================== */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        header.classList.add("sticky");


    }


    else{


        header.classList.remove("sticky");


    }


});






/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */


const revealElements = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right"
);




function revealOnScroll(){



    revealElements.forEach(element=>{


        const windowHeight =
        window.innerHeight;



        const elementTop =
        element.getBoundingClientRect().top;



        const revealPoint =
        120;



        if(elementTop < windowHeight - revealPoint){



            element.classList.add("active");



        }



    });



}





window.addEventListener(
"scroll",
revealOnScroll
);



window.addEventListener(
"load",
revealOnScroll
);






/* ===================================
   SCROLL PROGRESS BAR
=================================== */


const progressBar =
document.getElementById("progressBar");




window.addEventListener("scroll",()=>{


    const scrollTop =
    document.documentElement.scrollTop;



    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;



    const progress =
    (scrollTop / scrollHeight) * 100;



    if(progressBar){


        progressBar.style.width =
        progress + "%";


    }


});
/* ===================================
   WEDDING COUNTDOWN TIMER
=================================== */


const weddingDate =
new Date("February 15, 2027 19:00:00").getTime();




function countdown(){


    const now =
    new Date().getTime();



    const distance =
    weddingDate - now;



    if(distance < 0){


        document.getElementById("days").innerHTML="00";

        document.getElementById("hours").innerHTML="00";

        document.getElementById("minutes").innerHTML="00";

        document.getElementById("seconds").innerHTML="00";


        return;


    }




    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );



    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );





    const daysBox =
    document.getElementById("days");

    const hoursBox =
    document.getElementById("hours");

    const minutesBox =
    document.getElementById("minutes");

    const secondsBox =
    document.getElementById("seconds");




    if(daysBox){


        daysBox.innerHTML =
        days < 10 ? "0"+days : days;



        hoursBox.innerHTML =
        hours < 10 ? "0"+hours : hours;



        minutesBox.innerHTML =
        minutes < 10 ? "0"+minutes : minutes;



        secondsBox.innerHTML =
        seconds < 10 ? "0"+seconds : seconds;



    }



}





setInterval(countdown,1000);


countdown();







/* ===================================
   BACK TO TOP BUTTON
=================================== */


const backTop =
document.getElementById("backTop");




window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }


    else{


        backTop.classList.remove("show");


    }


});





if(backTop){


backTop.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });



});

}
/* ===================================
   GALLERY IMAGE REVEAL
=================================== */


const galleryItems =
document.querySelectorAll(".gallery-item");



function galleryReveal(){


    galleryItems.forEach((item,index)=>{


        const position =
        item.getBoundingClientRect().top;



        const screen =
        window.innerHeight;



        if(position < screen - 100){



            setTimeout(()=>{


                item.classList.add("active");


            },index * 120);



        }



    });



}



window.addEventListener(
"scroll",
galleryReveal
);


window.addEventListener(
"load",
galleryReveal
);







/* ===================================
   IMAGE LAZY EFFECT
=================================== */


const images =
document.querySelectorAll("img");



images.forEach(image=>{


    image.addEventListener("load",()=>{


        image.classList.add("loaded");


    });


});







/* ===================================
   RSVP FORM MESSAGE
=================================== */


const guestForm =
document.getElementById("guestForm");




if(guestForm){



guestForm.addEventListener(
"submit",
(e)=>{


    e.preventDefault();



    const button =
    guestForm.querySelector(
    ".submit-btn"
    );



    button.innerHTML =
    `
    <i class="ri-check-line"></i>
    Thank You
    `;



    button.style.background =
    "#8c6a36";



    setTimeout(()=>{


        guestForm.reset();



        button.innerHTML =
        `
        Send Confirmation
        <i class="ri-send-plane-fill"></i>
        `;



        button.style.background =
        "";



    },3000);



});



}







/* ===================================
   SMOOTH ANCHOR SCROLL
=================================== */


const anchors =
document.querySelectorAll(
'a[href^="#"]'
);



anchors.forEach(anchor=>{


    anchor.addEventListener(
    "click",
    function(e){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({


                behavior:"smooth"



            });



        }



    });



});







/* ===================================
   CURSOR HEART EFFECT
=================================== */


document.addEventListener(
"click",
function(e){



    const heart =
    document.createElement("span");



    heart.className =
    "click-heart";



    heart.innerHTML =
    "♥";



    heart.style.left =
    e.pageX + "px";



    heart.style.top =
    e.pageY + "px";



    document.body.appendChild(
    heart
    );




    setTimeout(()=>{


        heart.remove();



    },1000);



});
/* ===================================
   FINAL INITIALIZATION
=================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
        "Krish Weds Himanshi Website Loaded Successfully 💍"
    );


});







/* ===================================
   MOBILE VIEW OPTIMIZATION
=================================== */


function checkMobile(){


    if(window.innerWidth <= 768){


        document.body.classList.add(
            "mobile-view"
        );


    }


    else{


        document.body.classList.remove(
            "mobile-view"
        );


    }


}




window.addEventListener(
"resize",
checkMobile
);


checkMobile();







/* ===================================
   PREVENT EMPTY LINKS
=================================== */


const emptyLinks =
document.querySelectorAll(
'a[href="#"]'
);



emptyLinks.forEach(link=>{


    link.addEventListener(
    "click",
    (e)=>{


        e.preventDefault();


    });


});







/* ===================================
   PAGE VISIBILITY MUSIC CONTROL
=================================== */


document.addEventListener(
"visibilitychange",
()=>{


    if(document.hidden){



        if(bgMusic && musicPlaying){


            bgMusic.pause();


        }



    }


});







/* ===================================
   REMOVE LOADER FALLBACK
=================================== */


setTimeout(()=>{


    const loader =
    document.querySelector(
    ".loader"
    );



    if(loader &&
    !loader.classList.contains("hide")){


        loader.classList.add(
            "hide"
        );


    }


},4000);







/* ===================================
   OPTIMIZED SCROLL HANDLER
=================================== */


let ticking = false;



window.addEventListener(
"scroll",
()=>{


    if(!ticking){



        window.requestAnimationFrame(
        ()=>{


            revealOnScroll();


            galleryReveal();



            ticking = false;



        });



        ticking = true;



    }



});