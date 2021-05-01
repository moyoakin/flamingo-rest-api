import asyncHandler from "express-async-handler";
import User from "../models/usermodel.js";
import generateToken from "../utils/generateToken.js";

const signUpUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("could not create user");
  }
});

const userSignin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("invalid email or password");
  }
});

//Getting list of all users

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//Get Users by ID

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Update User

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;

    const updateUser = await User.save();
    res.json({
      _id: updatedUser.id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    });
  } else{
      res.status(404)
      throw new Error("user not found");
  }
});

// Delete a user
// ROute Delete/api/users/:id

const deleteUser = asyncHandler( async(req, res) => {
    const user = await User.findById(req.params.id);

    if(user){
        await User.remove();
    }else{
        req.status(404);
        throw new Error("User not deleted");
    }
})

export { signUpUser , userSignin , getUsers, getUserById, updateUser, deleteUser }
