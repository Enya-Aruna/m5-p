// একটা ওয়েবসাইট এ একটা Input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে Double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে Triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (Alert) দিয়ে বলবে Please Enter A Number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।
const textElement = document.getElementById('text');
const elementValueString = textElement.innerText ;
const elementValue = parseFloat(elementValueString)


document.getElementById('double').addEventListener('click' , function(){
    const inputFeild = document.getElementById('input');
    const inputFeildValueString = inputFeild.value ;
    const inputFeildValue = parseFloat(inputFeildValueString);
    inputFeild.value = '' ;
    if(isNaN(inputFeildValue)){
        alert ('please provide a number')
    }
    const double = Math.pow(inputFeildValue , 2);
    textElement.innerText = double ;
    return inputFeild ;
   
})
document.getElementById('tripol').addEventListener('click' , function(){
    const inputFeild = document.getElementById('input');
    const inputFeildValueString = inputFeild.value ;
    const inputFeildValue = parseFloat(inputFeildValueString);
    inputFeild.value = '' ;
    if(isNaN(inputFeildValue)){
        alert ('please provide a number')
    }
    const tripol = Math.pow(inputFeildValue , 3)
    textElement.innerText = tripol ;
    return inputFeild ;
})
