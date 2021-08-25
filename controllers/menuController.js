import asyncHandler from "express-async-handler";
import Menu from "../models/menuModel.js";

const addMenu = asyncHandler(async (req, res) => {
  const { itemName, itemDescription, itemPrice, imageUrl } = req.body;

  const menuExist = await Menu.findOne({ itemName: itemName });

  if (menuExist) {
    res.status(400);
    throw new Error(`Menu item ${itemName} already exist`);
  }

  const savedMenu = await Menu.create({
    itemName,
    itemPrice,
    itemDescription,
    imageUrl,
    status: true,
    dateCreated: Date.now(),
  });

  if (savedMenu) {
    res.status(201).json({
      _id: savedMenu.id,
      itemName: savedMenu.itemName,
      itemPrice: savedMenu.itemPrice,
      itemDescription: savedMenu.itemDescription,
      imageUrl: savedMenu.imageUrl,
    });
  } else {
    result.status(400);
    throw new Error("item does not exist");
  }
});

const findItemByID = asyncHandler(async (req, res) => {
  const menuItem = await Menu.findById(req.params.id);

  if (menuItem) {
    res.status(201).json(menuItem);
  } else {
    res.status(400);
    throw new Error("Invalid  Menu ID");
  }
});

const deleteMenu = asyncHandler(async (req, res) => {
  const menuItem = await Menu.findById(req.params.id);

  if (menuItem) {
    menuItem.status = false;
    menuItem.dateDeleted = Date.now();
    res.status(200).json({ message: "Menu Deleted" });
  } else {
    res.status(400).json({message: "Menu not found"});
  }
});

const getAllMenu = asyncHandler(async (req, res) => {
  const allMenu = await Menu.find({ status: true });
  res.json(allMenu);
});

export { addMenu, findItemByID, deleteMenu, getAllMenu };


