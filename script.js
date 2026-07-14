const locationBox = document.getElementById("location");

function getLocation() {
    if (!navigator.geolocation) {
        locationBox.innerHTML = "Geolocation not supported.";
        return;
    }
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
                );

                const data = await res.json();
                console.log(data);


                // Show only first 2 parts (like Blinkit)
                locationBox.innerHTML = data.display_name
                    .split(",")
                    .slice(0, 2)
                    .join(", ");

                console.log(data);

            } catch (err) {
                locationBox.innerHTML = "Unable to fetch address.";
            }
        },
        () => {
            locationBox.innerHTML = "Location permission denied.";
        }
    );
}

getLocation();




// search box
const words = [
    'Search "Chocolate"',
    'Search "Pizza"',
    'Search "Burger"',
    'Search "Milk"'
]
const placeholder = document.getElementById('placeholder')
const input = document.getElementById('search')

let index = 0;
function changePlaceholder() {
    if (input.value !== '') return;
    // up Animation
    placeholder.animate([
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-30px)", opacity: 0 }
    ], {
        duration: 300,
        fill: "forwards"
    })

    setTimeout(() => {
        index = (index + 1) % words.length;
        placeholder.textContent = words[index]

        // down animation
        placeholder.animate([
            { transform: "translateY(30px)", opacity:0 },
            { transform: "translateY(0)", opacity: 1 },
        ], {
            duration: 300,
            fill: "forwards"
        })
    },300)
}

setInterval(changePlaceholder,2500)

input.addEventListener('input',()=>{
    if(input.value===''){
        placeholder.style.display = 'block'
    }else{
        placeholder.style.display = 'none'
    }
})


// product skeleton
setTimeout(()=>{
    document.getElementById('product-skelton-outer').style.display='none'
    document.getElementById('product-row').style.visibility='visible'
},2000)


function opencart(){
    document.getElementById('cart-outer').style.right=0
    document.getElementById('cart-overlay').style.display="block"
}
function closecart(){
    document.getElementById('cart-outer').style.right="-350px"
    document.getElementById('cart-overlay').style.display="none"
}


function openlogin(){
    document.getElementById('login').style.display='block'
    document.getElementById('login-overlay').style.display='block'
}
function loginback(){
    document.getElementById('login').style.display='none'
    document.getElementById('login-overlay').style.display="none"
}

