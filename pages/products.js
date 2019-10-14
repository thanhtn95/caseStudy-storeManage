let Product = function (id, name, type, spec, price, imgurl) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.spec = spec;
    this.price = price;
    this.imgurl = imgurl;

    this.getId = function () {
        return this.id;
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getType = function () {
        return this.type;
    };

    this.setType = function (type) {
        this.type = type;
    };

    this.getSpec = function () {
        return this.spec;
    }

    this.setSpec = function (spec) {
        this.spec = spec;
    }

    this.getPrice = function () {
        return this.price;
    };

    this.setPrice = function (price) {
        this.price = price;
    };

    this.getImgurl = function () {
        return this.imgurl;
    };

    this.setImg = function (imgurl) {

    };
}

function createProduct() {
    let products = [];
    products.push(new Product(1, "Titan RTX", "Graphic Card", "Architecture: NVIDIA Turing <br>" +
        "Frame Buffer: 24GB GDDR6<br> Boots Clock: 1770 MHz <br> Tensor Cores: 576<br>CUDA Cores: 4608", 2500, 'https://www.nvidia.com/content/dam/en-zz/Solutions/titan/titan-rtx/nvidia-titan-rtx-shop-2c50-d.png'));
    products.push(new Product(2, "AMD Ryzen™ Threadripper™ 2990WX", "CPU", "# of CPU Cores: 32; # of Threads: 64<br>Max Boost Clock Up to 4.2GHz<br>Total L1 Cache 3MB<br>Total L2 Cache 16MB<br>Total L3 Cache 64MB<br>Unlocked: Yes<br>Package: sTR4; Default TDP / TDP:250W", 1800, 'https://www.amd.com/system/files/styles/992px/private/2019-01/207002-amd-ryzen-threadripper-2-campaign-chip-right-facing-1260x709.png?itok=rRPz76Hx'));
    products.push(new Product(3,"Intel Core I9-9900K","CPU",'CoreCount: 8; ThreadCount: 16<br>ClockSpeed: 3.60 GHz<br>ClockSpeedMax: 5.00 GHz<br>Cache: 16 MB Intel® Smart Cache<br>Bus: 8 GT/s<br>MaxTDP: 95 W',475.99,'http://static.techspot.com/images/products/2018/processors/intel/org/2018-10-19-product-2.jpg'));
    products.push(new Product(4,'NVIDIA RTX 2080 super','Graphic Card','GPU Architecture: Turing<br>RTX-OPS:  63 T<br> Boost Clock:  1815 MHz<br> Frame Buffer: 8 GB GDDR6<br> Memory Speed:  15.5 Gbps',699,'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2080-super/geforce-rtx-2080-super-shop-D.png'));
    products.push(new Product(5,'NVIDIA RTX 2070 super',"Graphic Card",'GPU Architecture: Turing<br>RTX-OPS:  52 T<br> Boost Clock:  1770 MHz<br> Frame Buffer: 8 GB GDDR6<br> Memory Speed:  14 Gbps',499,'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2070-super/geforce-rtx-2070-super-shop-D.png'));
    products.push(new Product(6,'NVIDIA RTX 2060 super',"Graphic Card",'GPU Architecture: Turing<br>RTX-OPS:  41 T<br> Boost Clock:  1650 MHz<br> Frame Buffer: 8 GB GDDR6<br> Memory Speed:  14 Gbps<br> No NVLink support',399,'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2060-super/geforce-rtx-2060-super-shop-D.png'));
    products.push(new Product(7,'NVIDIA Quadro RTX 8000','Graphic Card','CUDA Parallel-Processing Cores: 4,608<br>NVIDIA Tensor Cores: 576<br>NVIDIA RT Cores: 72<br>GPU Memory: 48 GB GDDR6 with ECC<br>RTX-OPS: 84T<br>Rays Cast: 11 Giga Rays/Sec<br>FP32 Performance: 16.3 TFLOPS',5500,'https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/quadro/rtx-8000/quadro-rtx-8000-front-625-u.jpg'));
    products.push(new Product(8, "AMD Ryzen™ 9 3950X", "CPU", "# of CPU Cores: 16; # of Threads: 32<br>Base Clock: 3.5GHz<br>Max Boost Clock Up to 4.7GHz<br>Total L1 Cache 1MB<br>Total L2 Cache 8MB<br>Total L3 Cache 64MB<br>Unlocked: Yes<br>Package: AM4; Default TDP / TDP:105W<br>Thermal Solution:  Wraith Prism with RGB LED", 749, 'https://img.purch.com/dr-lisa-su-next-horizon-gaming-opening-06092019-page-026-jpg/o/aHR0cDovL21lZGlhLmJlc3RvZm1pY3JvLmNvbS83L1kvODQxMzkwL29yaWdpbmFsL0RyX0xpc2FfU3UtTmV4dF9Ib3Jpem9uX0dhbWluZy1PcGVuaW5nXzA2MDkyMDE5LXBhZ2UtMDI2LmpwZw=='));
    products.push(new Product(9,'AMD Radeon™ RX 5700 XT','Graphic Card','Compute Units: 40<br>Base Frequency: 1605 MHz<br>Boost Frequency: Up to 1905 MHz<br>Game Frequency: 1755 MHz<br>Memory Speed (Effective): 14 Gbps<br>Max Memory Size: 8 GB<br>Memory Type (GPU): GDDR6<br>Memory Interface: 256-bit<br>Max. Memory Bandwidth: 448 GB/s',399,'https://www.amd.com/system/files/2019-06/237107-rx5700xt-gpu-gallery1-1260x709.png'));
    products.push(new Product(10,'Trident Z Royal DDR4-4800MHz','RAM','Memory Type: DDR4<br>Capacity: 16GB (8GBx2)<br>Multi-Channel Kit: Dual Channel Kit<br>Tested Speed: 4800MHz<br>Tested Latency: 18-22-22-42<br>Tested Voltage: 1.50V',578.99,'https://www.gskill.com/_upload/images/1908121830273.png'));
    return products;
}
let testList = localStorage.getItem('productList');
if(testList == null){
    localStorage.setItem('productList', JSON.stringify(createProduct()));
}