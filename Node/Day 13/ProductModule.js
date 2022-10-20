exports.allProducts=()=>{
    let prodcuts=[
        {Product: "Milk",
        Cat: "Diary",
        Price: "Rs.30",
        Qty: "2"
    },
    {Product: "Egg",
        Cat: "Non-veg",
        Price: "Rs.10",
        Qty: "0"
    },
    {Product: "Banana",
        Cat: "Veg",
        Price: "Rs.15",
        Qty: "1"
    },
    {Product: "Apple",
        Cat: "Veg",
        Price: "Rs.20",
        Qty: "0"
    }    ];
    return prodcuts;
}

exports.cat=()=>{
    let cat=[
        {Product: "Banana",
        Cat: "Veg",
        Price: "Rs.15",
        Qty: "1"
    },
    {Product: "Apple",
        Cat: "Veg",
        Price: "Rs.20",
        Qty: "0"
    } 
    ];
    return cat;
}

exports.price=()=>{
    let pro=[
        {Product: "Egg",
        Cat: "Non-veg",
        Price: "Rs.10",
        Qty: "0"
    },
    {Product: "Banana",
        Cat: "Veg",
        Price: "Rs.15",
        Qty: "1"
    }
]
return pro;
}

exports.outStock=()=>{
    let outStock=[
        {Product: "Egg",
        Cat: "Non-veg",
        Price: "Rs.10",
        Qty: "0"
    },
    {Product: "Apple",
        Cat: "Veg",
        Price: "Rs.20",
        Qty: "0"
    }
    ]
    return outStock;
}

exports.inStock=()=>{
    let inStock=[
        {Product: "Milk",
        Cat: "Diary",
        Price: "Rs.30",
        Qty: "2"
    },
    {Product: "Banana",
        Cat: "Veg",
        Price: "Rs.15",
        Qty: "1"
    },
    ]
    return inStock;
}