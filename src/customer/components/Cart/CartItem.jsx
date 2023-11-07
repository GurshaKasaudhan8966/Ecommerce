import React from 'react'
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
    <div className="flex items-center">
      <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
        <img
          className="w-full h-full object-cover object-top"
          src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg"
          alt=""
        />
      </div>
      <div className="ml-5 space-y-1">
          <p className="font-semibold">Women slim Mid rise Dress</p>
          <p className="opacity-70">Size:L</p>
          <p className="opacity-70 mt-2">Seller:Crishtaliyo Fashion</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹2052</p>
            <p className="font-semibold text-lg">
              ₹199
            </p>
            <p className="text-green-600 font-semibold">
              30% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton  color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button variant="text">Remove</Button>
          
        </div>
      </div>
      </div>
  )
}
