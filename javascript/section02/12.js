// 음식 주문
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function coolDownFood(food, callback) {
    setTimeout(()=>{
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(()=>{
        const frozenFood = `냉동된 ${food}`;
        callback(frozenFood);
    }, 1500);
}

orderFood((food)=>{
    console.log(food);

    coolDownFood(food, (coolDownedFood)=>{
        console.log(coolDownedFood);

        freezeFood(coolDownedFood, (frozenFood)=>{
            console.log(frozenFood);
        });
    });
})