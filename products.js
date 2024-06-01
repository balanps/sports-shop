const product = [
    {
        id: 0,
        image: './sho1.jpeg',
        title: 'Asics shoe',
        price: 340,
        data : 'Asicsshoe',
    },
    {
        id: 1,
        image: './sho2.jpeg',
        title: 'Fila shoe',
        price: 60,
        data : 'Filashoe',

    },
    {
        id: 2,
        image: './sho3.jpeg',
        title: 'Goldstar shoe',
        price: 1130,
        data : 'Goldstarshoe',

    },
    {
        id: 3,
        image: './sho4.jpeg',
        title: 'Adidas',
        price: 420,
        data : 'Adidas',

    },
    {
        id:4,
        image: './ten1.jpeg',
        title: 'Tennis Bad',
        price: 850,
        data : 'TennisBad',

    },
    {
        id:5,
        image: './ten2.jpeg',
        title: 'Tennis Ball',
        price: 230,
        data : 'TennisBall',

    },
    {
        id:6,
        image: './ten3.jpeg',
        title: 'Tennis Net',
        price: 490,
        data : 'TennisNet',

    },
    {
        id:7,
        image: './ten4.jpeg',
        title: 'Tennis Cark',
        price: 100,
        data : 'TennisCark',

    },
    {
        id:8,
        image: './foot1.jpeg',
        title: 'Football',
        price: 550,
        data :'Football',
    },
    {
        id:9,
        image: './foot2.jpeg',
        title: 'Nivia Ball',
        price: 670,
        data : 'NiviaBall',

    },
    {
        id:10,
        image: './foot3.jpeg',
        title: 'Keeper Helmat',
        price: 760,
        data : 'KeeperHelmat',

    },
    {
        id:11,
        image: './foot4.jpeg',
        title: 'Leg shots',
        price: 120,
        data : 'Legshots',

    },
    {
        id:12,
        image: './cri1.jpeg',
        title: 'Cricket Ball',
        price: 110,
        data : 'CricketBall',

    },
    {
        id:13,
        image: './cri2.jpeg',
        title: 'Cricket Bat',
        price: 1250,
        data : 'CricketBat',

    },
    {
        id:14,
        image: './cri3.jpeg',
        title: 'Cricket Stemp',
        price: 550,
        data: 'CricketStemp',

    },
    {
        id:15,
        image: './cri4.jpeg',
        title: 'Leg Pad',
        price: 820,
        data: 'LegPad'
    },

    {
        id:16,
        image: './b1.webp',
        title: 'Basket Ball',
        price: 100,
        data: 'BasketBall',

    },
    {
        id:17,
        image: './b2.webp',
        title: 'Basketball Net',
        price: 100,
        data: 'BasketballNet',

    },
    {
        id:18,
        image: './b3.webp',
        title: 'Ball  & Net',
        price: 100,
        data : 'BallNet',
    },
    {
        id:19,
        image: './b4.webp',
        title: 'Basketball Nivia',
        price: 100,
        data : 'BasketballNivia',
    },
    {
        id:20,
        image: './h1.webp',
        title: 'Handball-Nivia',
        price: 100,
        data : 'HandballNivia',

    },
    {
        id:21,
        image: './h2.webp',
        title: 'Handball-Cosco',
        price: 100,
        data: 'HandballCosco',

    },
    {
        id:22,
        image: './h3.webp',
        title: 'SureKatch Ball',
        price: 100,
        data: 'SureKatchBall',

    },
    {
        id:23,
        image: './h4.webp',
        title: 'Handball-Post',
        price: 100,
        data : 'HandballPost',

    },
    {
        id:24,
        image: 'f1.jpeg',
        title: 'Gym-Thumbals',
        price: 520,
        data : 'GymThumbals',

    },
    {
        id:25,
        image: 'f2.jpeg',
        title: 'Barbel-incline',
        price: 1400,
        data :'GymThumbals',
    },
    {
        id:26,
        image: 'f3.jpeg',
        title: 'Running-machine',
        price: 100,
        data : 'Runningmachine',

    },
    {
        id:27,
        image: 'f4.jpeg',
        title: 'Hand Gribber',
        price: 100,
        data: 'HandGribber',

    },

    {
        id:28,
        image: './v1.webp',
        title: 'Volleyball',
        price: 100,
        data: 'Volleyball',

    },
    {
        id:29,
        image: './v2.webp',
        title: 'Vector-Volleyball',
        price: 100,
        data: 'VectorVolleyball',

    },
    {
        id:30,
        image: './v3.webp',
        title: 'Ball & Net',
        price: 100,
        data: 'BallNet',

    },
    {
        id:31,
        image: './v-4.webp',
        title: 'Volleyball-items',
        price: 100,
        data: 'Volleyballitems',
    },
    
];        
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price,data} = item;
    return(
        `<div class='box' data-item=${data}>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
       
    }

}

let cartclick = document.getElementById("cart-click");
let sidecart = document.querySelector(".sidebar");
    cartclick.addEventListener('click',function() {
        sidecart.classList.toggle('sidebar-active');
    })
function mark() {
    sidecart.classList.remove('sidebar-active')
}

let Login_box = document.getElementById("login-box");
let Button_login = document.getElementById("show-login") 

Button_login.addEventListener('click', function() {
    Login_box.classList.add("login-show")
})
let Close_login = document.getElementById("close-icon")

Close_login.addEventListener('click', function() {
    Login_box.classList.remove("login-show")
})


//products search

const Search = document.getElementById("search-find");
const Div = document.querySelectorAll('.box')
Search.addEventListener('keyup',(event)=> {
    let SearchItem = event.target.value.toLowerCase().trim();
    Div.forEach((box)=> {
        const ValueSearch = box.dataset.item.toLowerCase();
        console.log(SearchItem)
        if(ValueSearch.includes(SearchItem)) {
            box.style.display = "flex";
        }else {
            box.style.display = "none";
        }
    });
        
    });
