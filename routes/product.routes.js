const express = require('express'); 
const productRoutes = express.Router(); 
 
const { 
    addNewUserPro, 
    getAllUsersPro, 
    getUserPro, 
    replaceUserPro, 
    updateUserPro, 
    deleteUserPro 
} = require('../Controller/product.controller'); 
 
productRoutes.post('/' , addNewUserPro); 
 
productRoutes.get('/' , getAllUsersPro); 
 
productRoutes.get('/:id',getUserPro); 
 
productRoutes.put("/:id" , replaceUserPro); 
 
productRoutes.patch("/:id" , updateUserPro); 
 
productRoutes.delete("/:id" , deleteUserPro); 
 
 
 
module.exports = productRoutes;