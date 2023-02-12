const express = require('express');

const app = express();


app.get('/', (req, res) => {
    // let nums = req.query.nums.split(',')

    console.log(typeof(nums));
    res.send(`<a href="/mean?nums=1,2,3,4,5">Mean</a> <br> <a href="/median?nums=1,2,3,4,5">Median</a> <br> <a href="/mode?nums=1,2,3,4,5">Mode</a>`);
    });
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
    app.get('/mean', (req, res) => {
    let nums = req.query.nums.split(',')
    console.log(nums)
    let numsLength = nums.length
    let sumOfNums = 0
    for (let i of nums){
        if(!parseInt(i)) {
            console.log('Def not a number')
            return res.status(400).send(`response: {operation: median, value:${i} is ${NaN}}`)}



        sumOfNums += parseInt(i)
    }

    console.log(sumOfNums);

    let mean = sumOfNums / numsLength
    return res.send(`response: {operation: mode, value: ${mean}}`)
    // res.send(`${mean}`);
    });
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
    app.get('/median', (req, res) => {
    let nums = req.query.nums.split(',')
    let newNums = []
    for (let i of nums){
        console.log(parseInt(i))
        if(!parseInt(i)) {
            console.log('Def not a number')
            return res.status(400).send(`response: {operation: median, value:${i} is ${NaN}}`)}
        newNums.push(i)
    }
    let median = []
    newNums.sort()
    let newNumsLength = newNums.length;
    if (newNumsLength % 2 === 0){
    let numsDiv = newNumsLength / 2
    console.log(numsDiv)
    let median = [newNums[numsDiv], newNums[numsDiv - 1]]
    return res.send(median)
    }else{
    numsDiv = (Math.floor(newNumsLength / 2))
    console.log(numsDiv)
    return res.send(`response: {operation: median, value: ${newNums[numsDiv]}}`)
        
        
        
        
        
        
    }







    res.send(`${median}`);
    });
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
    app.get('/mode', (req, res) => {
    let nums = req.query.nums.split(',')
    let dict = {}
    for (let i of nums){
        // console.log(i)
        if(!parseInt(i)) {
            console.log('Def not a number')
            return res.status(400).send(`response: {operation: mode, value:${i} is ${NaN}}`)}


        if (dict[i]){
            dict[i] += 1
        }else{
            dict[i] = 1
        }}
    let highestNum = [0]
    for (let i of Object.keys(dict)){
        console.log(dict[i])
        if (dict[i] > highestNum[0]){
            console.log(`greaterthan: ${i}`)
            highestNum.unshift(i)
        }

    }
    console.log(highestNum);

    console.log(dict);
    console.log(typeof(nums));
    return res.send(`response: {operation: mode, value: ${highestNum[0]}}`)
    // res.send(`${}`);
    });









app.listen(3000, function () {
    console.log('App on port 3000');
  })