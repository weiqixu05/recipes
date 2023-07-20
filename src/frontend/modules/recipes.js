import image from "../../files/images/image.jpg";

const recipeData=[
    {
        img: image,
        name:"dumplings",
        description:"chinese food",
        ingredients:["meat", "vegetables", "dough"],
        nutrition:[
            "calories: 100g",
            "carbs: 30g",
            "protein: 5g"
        ],
        steps:[
            "something",
            "something",
            "something"
        ]
    },
    {
        img: image,
        name:"burger",
        description:"american food",
        ingredients:["meat", "vegetables", "bun", "condiments"],
        nutrition:[
            "calories: 100g",
            "carbs: 30g",
            "protein: 5g"
        ],
        steps:[
            "something",
            "something",
            "something"
        ]
    }
]

export {recipeData};