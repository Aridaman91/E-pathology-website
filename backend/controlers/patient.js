const Patient = require('../Modals/patientModal');

exports.postPatient = async (req, res) => {
    try {
        const body = req.body;
        const newUser = await Patient.create(body);
        
        // Check if newUser was created successfully
        if (newUser) {
            return res.status(201).json({ // Use 201 for resource creation
                data: newUser,
                message: "Success in Patient Controller"
            });
        } else {
            return res.status(500).json({ // Server error if newUser is falsy
                error: "Some technical issue",
                message: "Failed in patient posting"
            });
        }

    } catch (err) {
        return res.status(500).json({ // Use 500 for server errors
            error: err.message || err,
            status: "fail",
            message: "Technical Fault"
        });
    }
}

exports.getPatientById = async (req, res) => {
    try {
        const { id } = req.params;
        const isUser = await Patient.findById(id);

        if (isUser) {
            return res.status(200).json({
                data: isUser,
                message: "Patient retrieved successfully"
            });
        } else {
            return res.status(404).json({ // Not found if patient does not exist
                message: "No such patient exists"
            });
        }

    } catch (err) {
        return res.status(500).json({ // Handle unexpected server errors
            error: err.message || err,
            status: "fail",
            message: "Technical Fault"
        });
    }
}

exports.getPatientByStatus = async (req, res) => {
    try {
        const { statusFind } = req.params;
        const isData = await Patient.find({ status: statusFind });

        return res.status(200).json({
            message: "Fetched successfully",
            data: isData
        });

    } catch (err) {
        return res.status(500).json({ 
            error: err.message || err,
            status: "fail",
            message: "Technical Fault"
        });
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const updatedPatient = await Patient.findByIdAndUpdate(id, body, { new: true }); // Use findByIdAndUpdate to get the updated data

        if (updatedPatient) {
            return res.status(200).json({
                message: "Updated successfully",
                data: updatedPatient // Send the updated patient data
            });
        } else {
            return res.status(404).json({ // Not found if patient does not exist
                message: "No such patient exists"
            });
        }

    } catch (err) {
        return res.status(500).json({ // Handle unexpected server errors
            error: err.message || err,
            status: "fail",
            message: "Technical Fault"
        });
    }
}


























// const Patient = require('../Modals/patientModal');

// // Post new patient data
// exports.postPatient = async (req, res) => {
//     try {
//         const body = req.body;
//         const newUser = await Patient.create(body);

//         // Check if newUser was created successfully
//         if (newUser) {
//             return res.status(201).json({
//                 data: {
//                     name: newUser.name,  // Add patient name
//                     email: newUser.email,  // Add patient email
//                     status: 'Pending',  // Set default status as 'Pending'
//                     drName: newUser.drName,  // Assuming you collect doctor details
//                     drDate: newUser.drDate  // Assuming you collect doctor visit date
//                 },
//                 message: "Patient added successfully and pending report updated!"
//             });
//         } else {
//             return res.status(500).json({
//                 error: "Technical issue",
//                 message: "Failed to add patient"
//             });
//         }

//     } catch (err) {
//         return res.status(500).json({
//             error: err.message || err,
//             status: "fail",
//             message: "Technical fault while posting patient data"
//         });
//     }
// };

// // Fetch patient data by status (e.g., Pending, Completed)
// exports.getPatientByStatus = async (req, res) => {
//     try {
//         const { statusFind } = req.params;
//         const isData = await Patient.find({ status: statusFind });

//         return res.status(200).json({
//             message: "Fetched patients by status successfully",
//             data: isData
//         });

//     } catch (err) {
//         return res.status(500).json({
//             error: err.message || err,
//             status: "fail",
//             message: "Technical fault while fetching patients by status"
//         });
//     }
// };
