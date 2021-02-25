import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
    try {
      // to not import what is already in DB
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
      
      const createdUsers = await User.insertMany(users);
      const adminUser = createdUsers[0]._id;
      // All products stil same, with spread operator adminUser added.
      const sampleProducts = products.map(product => {
          return { ...product, user: adminUser}
      })
       
      await Product.insertMany(sampleProducts)

      console.log('Data Imported!'.green.inverse);
      process.exit();
    } catch (error) {
       console.log(`${error}`.red.inverse);
       process.exit(1);
    }
}
