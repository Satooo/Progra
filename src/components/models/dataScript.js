export let possibleCheckoutItems=[];



let processorNum=0;
let buyNum=0;
let buySelection=0;
let componentsPrice=0;


export const  graphicItems=[{
    "name":"NVIDIA GeForce GTx base",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce GTx max",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce Metal",
    "price":200,
    "img":"images/graphic.png"
},{
    "name":"NVIDIA GeForce Omega",
    "price":400,
    "img":"images/graphic.png"
}];
export const processorItems=[{
    "name":"Intel I3",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I5",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I7",
    "price":200,
    "img":"images/processor.png"
},{
    "name":"Intel I9",
    "price":400,
    "img":"images/processor.png"
}];
export const memoryItems=[{
    "name":"RAM 4gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 8gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 16gb",
    "price":200,
    "img":"images/memory.png"
},{
    "name":"RAM 32gb",
    "price":400,
    "img":"images/memory.png"
}];
export const storageItems=[{
    "name":"Toshiba 500GB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 1TB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 2TB",
    "price":200,
    "img":"images/storage.png"
},{
    "name":"Toshiba 3TB",
    "price":400,
    "img":"images/storage.png"
}];
export const coolerItems=[{
    "name":"Cooler 10",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 20",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 30",
    "price":200,
    "img":"images/cooler.png"
},{
    "name":"Cooler 40",
    "price":400,
    "img":"images/cooler.png"
}];
export const windowsItems=[{
    "name":"Windows 8 32bit AMD",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit AMD",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit Intel",
    "price":200,
    "img":"images/windows.png"
},{
    "name":"Windows 8 64bit Intel",
    "price":400,
    "img":"images/windows.png"
}];
export const powersupplyItems=[{
    "name":"PowerSupply Base",
    "price":200,
    "img":"images/power.png"
},{
    "name":"PowerSupply Max",
    "price":200,
    "img":"images/power.png"
}];

export const gamingComponents = [
    1,3,2,0,1,1,0
];
export const designComponents = [
    2,3,3,0,1,1,1
];
export const codingComponentes = [
    3,3,3,3,1,1,1
];
export const renderingComponents = [
    3,2,2,3,1,1,1
];
export const officeComponents = [
    0,1,1,3,1,0,0
];
export const otherComponents = [
    0,1,1,3,1,0,0
];

export const allItems=[
    graphicItems,processorItems,memoryItems,storageItems,coolerItems,windowsItems,powersupplyItems
]
export default {
    allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
    windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
    codingComponentes, officeComponents, renderingComponents, otherComponents,
    possibleCheckoutItems
}




