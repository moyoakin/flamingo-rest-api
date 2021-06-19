import asyncHandler from 'express-async-handler';
import {Menu} from "../models/menuModel.js";

const addMenu = asyncHandler(async(req,res)=>{
    const { menu } = req.body;
    console.log(menu);

    const menuExist = await Menu.findOne({menuItemName: menuItemName})

    if (menuExist) {
        res.status(400);
        throw new Error("No menu item selected");
      }

      const menu = await Menu.create({
        menuItemName,
        menuItemNamePrice,
        menuDescription,
        imageUrl

      })


      if(menu){
          result.status(201).json({
              _id:menu.id,
              menuItemName: menu.menuItemName,
              menuItemNamePrice: menu.menuItemNamePrice,
              menuDescription: menu.menuDescription,
              imageUrl: menu.imageUrl

          })
      }else{
          result.status(400)
          throw new Error("item does not exist")
      }

})



export {addMenu} 

//eport csv
// get all by time
// create
//method that calculates time