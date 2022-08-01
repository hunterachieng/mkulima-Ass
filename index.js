class Mkulima {
    constructor(){
        this.farms = []
        this.products= []
        this.orders= []
    }
    addFarm(farmId, name,farmer,phone,address){
        let farm = {
            farmId:farmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address
        }
        this.farms.push(farm)
        return farm
    };
    removeFarm(farmId){
        let farm = this.farms.find(item => item.farmId === farmId)
        let farmIndex = this.farms.indexOf(farm);
        let deletedFarm = this.farms.splice(farmIndex,1)
        return deletedFarm

    };
    updateFarm(farmId,name,farmer,phone,address){
      
        for(const item of this.farms){
            if(item.farmId === farmId){
                item.name = name;
                item.farmer = farmer;
                item.phone = phone;
                item.address = address;
                break;

            }
        }     
        return this.farms
    };
    getFarm(farmId){
        let farm = this.farms.find(item => item.farmId === farmId)
        return farm

    };
    addProduct(productId, name, price){
        let product = {
            productId:productId,
            name:name,
            price:price,
           
        }
        this.products.push(product)
        return product
    };
    removeProduct(productId){
        let product = this.products.find(item => item.productId === productId);
        let productIndex = this.products.indexOf(product);
        let deletedProduct = this.products.splice(productIndex,1);
        return deletedProduct;
    };
    updateProduct(productId, name, price){
        for(const item of this.products){
            if(item.productId === productId){
                item.name = name;
                item.price = price;
                break;

            }
        }     
        return this.products

    };
    getProduct(productId){
        let product = this.products.find(item => item.productId === productId)
        return product

    };
    printProducts(){
        return this.products;
    };
    calculateOrderCost(productId,quantity){
        let product = this.products.find(item => item.productId === productId)
        let orderCost = product.price * quantity
        return orderCost


    }

}

let mkulima = new Mkulima();
mkulima.addProduct("1","Ndovu Maize Meal",2300);
console.log(mkulima.printProducts());
console.log(mkulima.calculateOrderCost("1", 34));


