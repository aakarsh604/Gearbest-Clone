import {navbar} from "../Components/navbar.js"
document.getElementById("headIndex").innerHTML = navbar();


import footer from "../Components/footer.js";
document.querySelector("#footer").innerHTML = footer();




var ProductDatas = [
    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_img-v1/42405dc55cb8.jpg",
        name:"OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity",
        price: 11295.00,
        act_price: 15305.00,
    },

    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/a0da751fd8f8.jpg",
        name: "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphon",
        price: 798.00,
        act_price: 1229.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img-v1/5e4723996cff.jpg",
        name:"Xiaomi Mi Water Immersing Sensor Smart Wireless Water",
        price:999.00,
        act_price:1299.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",
        name:"Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell",
        price:19992.00,
        act_price:23099.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16492/goods_img-v1/bb1748b1d9f2.jpg",
        name:"A9 Mini WiFi Video Surveillance 1080p HD Infrared Night Vision",
        price:2000.00,
        act_price:2500.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/5f26bc001550.jpg",
        name:"Original Xiaomi Redmi Buds 3 Lite Youth Edition Earphone",
        price:1505.00,
        act_price:2009.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/0b0ff330204b.jpg",
        name:"BMAX MaxPad I11 UNISOC T618 Octa Core 8GB RAM 128GB",
        price:13073.00,
        act_price:17083.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16420/goods_img-v3/d5477f83e8f5.jpg",
        name:"360 Rotating Flying Ball Globe Shape Magic Controller",
        price:2171.00,
        act_price:3028.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16425/goods_img-v3/7a007e142207.jpg",
        name:"Tronxy X5SA-600 Large 3D Printer Direct Drive 3D Printer",
        price:8200.00,
        act_price:11000.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6900783172733300736/16468/goods_img-v1/e483ba511256.jpg",
        name:"Global Version Xiaomi Redmi Note 10 5G Smartphone ",
        price:12092.00,
        act_price:16230.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v1/126354806df6.jpg",
        name:"Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen",
        price:200.00,
        act_price:250.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_img-v3/6d537d29b48f.jpg",
        name:"Original Global Version Xiaomi RedmiBook Pro 15 Laptop",
        price:17919.00,
        act_price:21219.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_img-v1/5ef9d5b1a9a0.jpg",
        name:"Ulefone Power Armor 13 Global Version 13200mAh Battery 8G",
        price:11319.00,
        act_price:13419.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16496/goods_img-v5/64df3bb8819d.jpg",
        name:"Original Xiaomi Smart Weight Scale 2 Health Weighting Scale",
        price:3331.00,
        act_price:4440.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_img-v4/ad2a20a94177.jpg",
        name:"ASLING Luminous Series One-Cable Three Purpose USB",
        price:300.00,
        act_price:450.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_img-v1/524849cb314c.jpg",
        name:"US/EU Stock ENGWE Bike C20 20inch Adult Electric Bike",
        price:7800.00,
        act_price:11100.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16417/goods_img-v1/0b74ebf9ee1a.jpg",
        name:"T88 Smart Watch Body Temperature Monitoring ",
        price:169.00,
        act_price:282.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16448/goods_img-v3/6f9c892c7ec6.jpg",
        name:"5in1 CO2 Meter Digital Temperature Humidity Tester",
        price:729.00,
        act_price:999.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16409/goods_img-v1/5b7959d3089f.jpg",
        name:"Flashlight Strong Light Rechargeable Zoom ",
        price:600.00,
        act_price:1200.00,
    },

    {
         img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16423/goods_img-v1/2f9b88a31113.jpg",
         name:"Xiaomi Aqara Door Window Sensor Zigbee Wireless",
         price:1989.00,
         act_price:2065.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_img-v3/e0b65bad2e24.jpg",
        name:"Original Global Newest Xiaomi Redmibook Pro 15",
        price:11586.00,
        act_price:15786.00,
    },

    { 
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16498/goods_img-v5/eca3dcc2ab20.jpg",
        name:"L900 PRO 5G WIFI FPV Foldable GPS RC Drone Quadcopter",
        price:4093.00,
        act_price:5899.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878028664286670848/16455/goods_img-v2/00f85739bfeb.jpg",
        name:"10 PCS Watch Strap Button Compass Mini Portable",
        price:560.00,
        act_price:899.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16427/goods_img-v1/1993a3019ba8.jpg",
        name:"Roborock S7 Robot Vacuum Cleaner for Home ",
        price:23735.00,
        act_price:33835.00,
    },

    { 
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16475/goods_img-v1/974197f8bb55.jpg",
        name:"LONGER RAY5 Laser Engraver 3.5inch Touch Screen",
        price:14329.00,
        act_price:18429.00,
    },

    {  
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_img-v1/76cb26d2019a.jpg",
        name:"USLION Magnetic USB Cable For iPhone 12 11 Xiaomi ",
        price:100.00,
        act_price:180.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6895742097949913088/16457/goods_img-v5/7f4d41d4fc19.jpg",
        name:"Artillery Sidewinder SW-X2 3D Printer Ultra-Quiet Printing",
        price:10389.00,
        act_price:12449.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16152/goods_img-v2/78e3dccea62c.jpg",
        name:"Lenovo LP1S TWS Bluetooth Earphone Sports Wireless",
        price:918.00,
        act_price:1722.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16406/goods_img-v1/c54120f58bbb.jpg",
        name:"New Arrival 4G LTE Tablets 10.1 Inch Android 9.0 Octa Core",
        price:18244.00,
        act_price:15294.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16506/goods_img-v3/a7b29b46af04.jpg",
        name:"New Style 21V 16.8V 12V Electric Cordless Screwdriver",
        price:1869.00,
        act_price:3089.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16063/goods_img-v1/bcaeeba97bab.jpg",
        name:"Mite Removal Instrument Home Bed Vacuum Cleaner",
        price:3056.00,
        act_price:4393.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15933/goods_img-v1/23b0e0b06657.jpg",
        name:"1080P WIFI IP PTZ 2MP Camera Dome ONVIF Outdoor",
        price:8041.00,
        act_price:12052.00,
    },

    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_img-v8/286a149e4bd4.jpg",
        name:"XiaoMi Mijia Men Sport Shoes Sneakers Sneaker 4 4th Men",
        price:1404.00,
        act_price:1758.00,
    },
    
    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_img-v5/d92c3c85c4b5.jpg",
        name:"CPU Processor Circuit Diagram T Shirt Men Summer Cotton",
        price:999.00,
        act_price:1400.00,
    },
    
    {
        img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6911257965974712320/16499/goods_img-v1/4dfde4a08af6.jpg",
        name:"Electric Kettle Temperature Control Stainless Steel",
        price:1109.00,
        act_price:1329.00,
    }

];

function AllproductData(ProductDatas){
    document.getElementById('products').innerHTML=""
    ProductDatas.forEach(function(ele){
        let box=document.createElement('div')
        let img=document.createElement('img')
        img.src=ele.img_url;
        img.style.height='220px'
        let name=document.createElement('p');
        name.innerText=ele.name;
        name.style.textAlign='center'
        let price=document.createElement('p');
        price.innerText="₹"+ele.price;
        box.addEventListener('click',function(){
            productpage(ele);
            
        })
        box.append(img,name,price)
        document.getElementById('products').append(box)
    })
}

AllproductData(ProductDatas)

function productpage(ele){
    localStorage.setItem('ProductDetail',JSON.stringify(ele));
}



// console.log(sorting)

document.getElementById('zero-to-thousand').addEventListener('click',productsort);

function productsort(){
//    console.log('working')
   ProductDatas.sort(function(a,b){
       return Number(a.price)-Number(b.price);
   })
   console.log(ProductDatas)
   AllproductData(ProductDatas)
}

