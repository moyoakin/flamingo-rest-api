import asyncHandler from 'express-async-handler';
import {Menu} from "../models/menuModel.js";

const addMenu = asyncHandler(async(req,res)=>{
    const {menuItem, manuItemPrice} = req.body;
    console.log(menuItem);

    if (menuItem && menuItem.length == 0) {
        res.status(400);
        throw new Error("No menu item selected");
      }

      const menu = new Menu({
          menuItemName: menuItemName
         
      });

      const newMenu = await menu.save();
      res.status(201);

})

export {menuItem, manuItemPrice} 