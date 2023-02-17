const { application } = require("express");
const express = require("express");
const morgan = require("morgan");
// const {items: items} = require("./fakeDB");
const router = new express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    console.log(items)

    res.json(items);
  });
  
  router.get("/items", (req, res) => {
    res.send(`<br /> <form action="#" method="post"><input type="text" name="name" placeholder="Name"><input type="text" name="price" placeholder="Price"><input type="submit"></form>`);
  });
  
  router.post("/items", (req, res) => {
    console.log('this was a post to /items')
    itemPrice = req.query.price
    itemName = req.query.name
    console.log(itemPrice, itemName)
    items.push({name: itemName, price: itemPrice})
    console.log(items)
    res.status(201).json(items);
  });
  
  router.get("/items/:name", (req, res) => {
    console.log(req.params.name)
    let name = req.params.name
    let foundItem = []
    for (let i of items) {
        console.log(i.price)
        if (i.name === name) {
            console.log(`in if stat: ${i.price}`)
            foundItem.push({'price': i.price})
        }
    }

    console.log(foundItem)
    let singleItem = [{name: name, price: foundItem[0].price}]
    res.json(singleItem);

  });
  
  router.patch("/items/:name", (req, res) => {
    let name = req.params.name

    for (let i of items){
        if (i.name === name){
            i.price = req.query.price

        }
    }
    newItem = {name: name, price: req.query.price}
    res.json(newItem);
  });
  
  router.delete("/items/:name", (req, res) => {
    let name = req.params.name
    let num = 0
    for (let i=0; i<items.length; i++){
        if (items[i].name === name){
            num = i
        }}
    items.splice(num, 1)
    
    res.json({message: "Deleted"});
  });
  
  module.exports = router;