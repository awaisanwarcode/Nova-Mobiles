import express from "express";
import * as fun from "../Controller/Controller.js";
import multer from "multer";
import path from "path";
import { productStorage, scriptStorage } from "../Config/cloudinary.js";
const Routes = express.Router();

const uploads = multer({ storage: productStorage });
const uploadScript = multer({ storage: scriptStorage });

Routes.post("/Ad/prdct/Add", uploads.single("image"), fun.AddProduct);
Routes.get("/Ad/prdct/All", fun.GetAllPrdct);
Routes.get("/Ad/ordrs/all", fun.GetAllOrdrs);
Routes.post("/del/prdct/Admn", fun.delItmByAdm);
Routes.post("/Ad/del/ordr", fun.delOrdrByAdm);


Routes.get("/get/all/itms", fun.GetAllPrdct);
Routes.post("/add/cartdata", fun.AddCartData);
Routes.post("/get/cartData", fun.getCartData);
Routes.post("/proceed/Payment", fun.updtCrtAndProsedToPy);
Routes.post("/cancel/ordr", fun.cancalTheOrder);
Routes.post("/Add/Address/Smpl", fun.AddUserAddress);
// Here Bt refers to Payment via Bank Transfer;
Routes.post("/Add/Address/Bt", uploadScript.single("image"), fun.AddUserAddressBt);
export default Routes;