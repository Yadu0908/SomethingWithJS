
    
const throttleFunction = (func, delay) => {
 
           
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
 
                
        console.log(now - prev, delay);
 
        if (now - prev > delay) {
            prev = now;       
            return func(...args);
        }
    }
}

document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {


        
        
        let imgDiv= document.createElement("div")
        imgDiv.classList.add("imageDiv");
        
        imgDiv.style.left = dets.clientX+ "px";
        imgDiv.style.top = dets.clientY+ "px";


        
        let img= document.createElement("img")
        img.setAttribute("src", "image.jpg");
        imgDiv.appendChild(img)

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: 0.6
        })


        gsap.to(img, {
            y: "100%",
            delay: .8,
            ease: Power2,
        })

        document.body.appendChild(imgDiv)
        setTimeout(()=>{

            imgDiv.style.transition = "ease-in-out 100ms"
            document.body.removeChild(imgDiv)
        }, 2000)
    
}, 200));