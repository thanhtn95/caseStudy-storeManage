let producthandler = new ProductDataHandler();
let productList = producthandler.getProductList('productList');
let tmp = producthandler.getProductFromUrl(productList);
let userId = localStorage.getItem('currentUser');
document.getElementById('editbtn').innerHTML = '<button type="button"  onclick="goToEditProduct(' + tmp.getId() + ')">Change Product Info</button>'
showInfo(tmp);

function GoBack() {
    window.location.assign("productsList.html?" + userId);
}

function goToEditProduct(id) {
    producthandler.editProductInfo(id, productList, userId);
}

function changeProductPic() {
    let imgUrl = document.getElementById("imgUrl").value;
    let preView = document.getElementById('preView');
    preView.src= imgUrl;
}

function showInfo(obj) {
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let spec = document.getElementById("spec");
    let price = document.getElementById("price");
    let imgUrl = document.getElementById("imgUrl");
    let preView = document.getElementById('preView');
    name.value = obj.getName();
    type.value = obj.getType();
    spec.value = obj.getSpec().split('<br>').join('--');
    price.value = obj.getPrice();
    imgUrl.value = obj.getImgurl();
    preView.src = obj.getImgurl();
}