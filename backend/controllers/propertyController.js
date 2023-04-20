const Property = require('../models/Property')
const propertyController = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')
const User = require('../models/User')

// get all ------------------> Checked
propertyController.get('/getAll', async (req, res) => {
    try {
        const properties = await Property.find({});
        // const properties = await Property.find({}).populate("currentOwner", '-password')
        // console.log(properties)
        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error.message);
        //console.error(error)
    }
})

// get featured ------------------> Checked
propertyController.get('/find/featured', async (req, res) => {
    try {
        const featuredProperties = await Property.find({ featured: true }).populate("currentOwner", '-password')
        return res.status(200).json(featuredProperties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get all from a specific type ------------------> Checked
propertyController.get('/find', async (req, res) => {
    const type = req.query
    // {type : 'Urban'}
    // let properties = []
    try {
        if (type) {
            const properties = await Property.find(type).populate('currentOwner' , '-password')
            return res.status(200).json(properties)
            // properties = await Property.find(type).populate("owner", '-password')
        } else {
            // properties = await Property.find({})
            return res.status(500).json({msg: "No such Type"})
        }
        // return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET COUNT OF TYPE OF PROPERTIES. -> EX: {BEACH: 34, MOUNTAIN: 23} ------------------> Checked
propertyController.get('/find/types', async (req, res) => {
    try {
        const beachType = await Property.countDocuments({ type: 'beach' })
        const mountainType = await Property.countDocuments({ type: 'mountain' })
        const villageType = await Property.countDocuments({ type: 'village' })

        return res.status(200).json({ beach: beachType, mountain: mountainType, village: villageType })
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// Get individual Property ------------------> Checked
propertyController.get('/find/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')

        if (!property) {
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

// create an estate ------------------> Error in sqmeter field
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

// update estate ------------------> Checked
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() !== req.user.id) {
            throw new Error("You are not allowed to update other's properties")
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )


        return res.status(200).json(updatedProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})


// delete estate ------------------> Not getting delete from databasee
propertyController.delete('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() !== req.user.id) {
            throw new Error("You are not allowed to delete other's properties")
        }

        await property.delete()

        return res.status(200).json({ msg: "Successfully deleted property" })
    } catch (error) {
        return res.status(500).json(error)
    }
})


// // fetch my properties
// propertyController.get('/find/my-properties', verifyToken, async (req, res) => {
//     try {
//         const properties = await Property.find({ currentOwner: req.user.id })

//         return res.status(200).json(properties)
//     } catch (error) {
//         console.error(error.message)
//     }
// })

// fetch bookmarked yachts
// propertyController.get('/find/bookmarked-properties', verifyToken, async (req, res) => {
//     try {
//         const properties = await Property.find({ bookmarkedUsers: { $in: [req.user.id] } })

//         return res.status(200).json(properties)
//     } catch (error) {
//         console.error(error)
//     }
// })



// bookmark/unbookmark estate
// propertyController.put('/bookmark/:id', verifyToken, async (req, res) => {
//     try {
//         let property = await Property.findById(req.params.id)
//         if (property.currentOwner.toString() === req.user.id) {
//             throw new Error("You are not allowed to bookmark your project")
//         }


//         if (property.bookmarkedUsers.includes(req.user.id)) {
//             property.bookmarkedUsers = property.bookmarkedUsers.filter(id => id !== req.user.id)
//             await property.save()
//         } else {
//             property.bookmarkedUsers.push(req.user.id)

//             await property.save()
//         }

//         return res.status(200).json(property)
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// })

module.exports = propertyController