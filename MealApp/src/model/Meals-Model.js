class Meal {
    constructor( id , categoryId , title , affordability , complexity , imageUrl , duration , ingredients , instructions , isGlutenFree , isVegan, isVegeterian , isLactoseFree ){
        this.id = id ,
        this.categoryId = categoryId ,
        this.title = title ,
        this.affordability = affordability ,
        this.complexity = complexity ,
        this.imageUrl = imageUrl ,
        this.duration = duration ,
        this.ingredients = ingredients ,
        this.instructions = instructions ,
        this.isGlutenFree  = isGlutenFree ,
        this.isVegan = isVegan ,
        this.isVegeterian = isVegeterian,
        this.isLactoseFree = isLactoseFree
    }
}

export default Meal