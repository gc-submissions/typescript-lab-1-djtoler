interface Mountain {
    name: string,
    height: number
}

const Mountains: Mountain[] = [
{
name: "Kilimanjaro",
height: 19341
},

{
name: "Everest",
height: 29029
},

{
name: "Denali",
height: 20310      
}

]

const findNameOfTallestMountain = (array: Mountain[]): string => {
    let tallestMountain = array[0];
    array.forEach((item) => {
        if (item.height > tallestMountain.height) {
            tallestMountain = item
        } 
        return findNameOfTallestMountain;  
    })
     return tallestMountain.name
}
let  nameOftallestMontain = findNameOfTallestMountain(Mountains);
console.log(nameOftallestMontain)