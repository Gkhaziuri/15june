
//  function getSalePrice(product_price, sale_percentage) {
//             let salePrice = (product_price * sale_percentage / 100)
//             return salePrice

//         }
//         let salePrice = getSalePrice(500, 20);
//         console.log(getSalePrice(500, 20))

        
//         let paragraph = document.createElement("p");
//         paragraph.textContent = salePrice 
//         document.body.appendChild(paragraph);


        const info = [
            {   
                name: "Product 1",
                price: "200",
                created_at: "01-02-2022", 
            }
            ]
    
            function getRenderData(info) {
                for (let index = 0; index < info.length; index++) {
                    const element = info[index];
                    let container = document.createElement("div");
    
                    container.classList.add("cont")
    
                    let name = document.createElement("div")
                    name.textContent = element.name
                    container.appendChild(name)
    
                    let price = document.createElement("div")
                    price.textContent = element.price
                    container.appendChild(price)
    
                    let created_at = document.createElement("div")
                    created_at.textContent = element.created_at
                    container.appendChild(created_at)
    
                    document.body.appendChild(container)
                }
    
            } 
                getRenderData(info)




                const button = document.getElementById("clickButton")
               
                button.classList.add("click-button")
                button.textContent = "Click me"
                document.body.appendChild(button);

                button.addEventListener("click", ()=> {
                    window.open("https://youtube.com/")
                
                });