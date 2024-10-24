// const { error } = require('console');
// const Test=require('../Modals/testModels');
// exports.postTest=async(req,res)=>{
//     try{
//         const body=req.body;
//         const isDataexist=await Test.findOne({name:body.name});
//         if (isDataexist){
//             res.status(202).json({
//                 "status":"success",
//                 "message":"Data alredy exit"

// })
//         }else{
//             const dataEnter = await Test.create(body);
//             res.status(200).json({
//                 message:"added succesfuly",
//                 status:"Success",
//                 data:dataEnter

//             })

//         }
//         console.log(body)

//     }catch(err){
//         res.status(404),json({
//             error:err,
//             status:"fail",
//             "message":"techinical Fault"
//         })
//     }
// }
// exports.getTest=async(req,res)=>{
//     try{
//         const testData=await Test.find({});
//         if(testData){
//             res.status(200).json({
//                 message:"test available succesfuly",
//                 status:"Success",
//                 data:testData

//             })
//         }
//             else{
//                 const dataEnter = await Test.create(body);
//             res.status(200).json({
//                 message:"no test available",
//                 status:"fail",
//                 data:testData

//             })

//             }
        
    

//     }catch(err){
//         res.status(404),json({
//             error:err,
//             status:"fail",
//             "message":"techinical Fault"
//         })
//     }

// }
// exports.getTestById=async(req,res)=>{
//     const {id}=req.params;

//      try{
//          const testData=await Test.findById({id});
//          if(testData){
//              res.status(200).json({
//                  message:"test available succesfuly",
//                  status:"Success",
//                  data:testData

//              })
//          }
//              else{
                
//              res.status(200).json({
//                  message:"no test available",
//                  status:"fail",
//                  data:testData

//              })

//              }
        
    

//      }catch(err){
//          res.status(404).json({
//              error:err,
//              status:"fail",
//              "message":"techinical Fault"
//          })
//      }

// }
const Test = require('../Modals/testModels');
const mongoose = require('mongoose');

// Post multiple tests
exports.postTest = async (req, res) => {
    try {
        const body = req.body;

        // Validate if the body is an array
        if (!Array.isArray(body)) {
            return res.status(400).json({
                status: "fail",
                message: "Expected an array of test objects"
            });
        }

        const existingTests = [];
        const newTests = [];

        for (const test of body) {
            const isDataExist = await Test.findOne({ name: test.name });
            if (isDataExist) {
                existingTests.push(test.name);
            } else {
                newTests.push(test); // Collect new tests to be added
            }
        }

        if (newTests.length > 0) {
            await Test.insertMany(newTests); // Bulk insert new tests
        }

        if (existingTests.length > 0) {
            return res.status(202).json({
                status: "partial success",
                message: "Some tests already exist",
                existingTests: existingTests
            });
        }

        res.status(200).json({
            message: "All tests added successfully",
            status: "success"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
            status: "fail",
            message: "Technical fault"
        });
    }
};

// Get all tests
exports.getTest = async (req, res) => {
    try {
        const testData = await Test.find({});

        if (testData.length > 0) {
            return res.status(200).json({
                message: "Tests fetched successfully",
                status: "success",
                data: testData
            });
        } else {
            return res.status(404).json({
                message: "No tests available",
                status: "fail"
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
            status: "fail",
            message: "Technical fault"
        });
    }
};

// Get test by ID
exports.getTestById = async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the provided ID is valid
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid test ID",
                status: "fail"
            });
        }

        const testData = await Test.findById(id);

        if (testData) {
            res.status(200).json({
                message: "Test fetched successfully",
                status: "success",
                data: testData
            });
        } else {
            res.status(404).json({
                message: "Test not found",
                status: "fail"
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
            status: "fail",
            message: "Technical fault"
        });
    }
};
