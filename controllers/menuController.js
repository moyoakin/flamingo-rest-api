import asyncHandler from 'express-async-handler';
import Menu from "../models/menuModel.js";

const addMenu = asyncHandler(async(req,res)=>{
    const { itemName, itemDescription,itemPrice, imageUrl } = req.body;
    

    const menuExist = await Menu.findOne({itemName: itemName})

    if (menuExist) {
        res.status(400);
        throw new Error(`Menu item ${itemName} already exist`);
      }

      const savedMenu = await Menu.create({
        itemName,
        itemPrice,
        itemDescription,
        imageUrl,
        status:true,
        dateCreated:Date.now()

      })


      if(savedMenu){
          res.status(201).json({
              _id:savedMenu.id,
              itemName: savedMenu.itemName,
              itemPrice: savedMenu.itemPrice,
              itemDescription: savedMenu.itemDescription,
              imageUrl: savedMenu.imageUrl

          })
      }else{
          result.status(400)
          throw new Error("item does not exist")
      }

})



export {addMenu} 

// get all menu
// delete by ID
