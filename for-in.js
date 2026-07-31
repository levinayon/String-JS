const sunglass = {
    color: 'black',
    price: '220',
    brand: 'MA',
};
for(const key in sunglass){
    console.log(key)
    const value = sunglass[key];
     console.log(key, value);
}
