let laundrys = [
    { id: 1, name:'regular', price: 7_000, duration_hour: 16 },
    { id: 2, name:'express', price: 12_000, duration_hour: 5 },
    { id: 3, name:'hemat', price: 5_000, duration_hour: 48 },
]

function LaundryList(req, res) {
    const laundry = () => {
        return laundrys;
    }

    return res.status(200).json(laundry())
}

function LaundryDetail(req, res) {
    const laundryId = parseInt(req.params.id)
    const laundry = () => {
        return laundrys.find((item) => item.id === laundryId)
    }

    if (laundry) {
        return res.status(200).json(laundry())
    } else {
        return res.status(400).json({ error: 'Product not found' })
    }
}

function LaundryCreate(req, res) {
    const newLaundry = req.body;
    laundrys.push(newLaundry)

    return res.status(201).json(newLaundry)
}

function LaundryUpdate(req, res) {
    const laundryId = parseInt(req.params.id)
    const updatedLaundryData = req.body;

    const updatedLaundry = () => {
        const laundryIndex = laundrys.findIndex((item) => item.id === laundryId)

        if (laundryIndex !== -1) {
            laundrys[laundryIndex] = {
                ...laundrys[laundryIndex],
                ...updatedLaundryData
            }
            return laundrys[laundryIndex]
        }
        return null

    }

    if (updatedLaundry()) {
        res.status(200).json(updatedLaundry())
    } else {
        res.status(400).json({ error: 'Product not found' })
    }

    // return res.status(200).json({ok: 4})
}

function LaundryDelete(req, res) {
    const laundryId = parseInt(req.params.id)

    const deletedLaundry = () => {
        const laundryIndex = laundrys.findIndex((item) => item.id === laundryId)

        if (laundryIndex !== -1) {
            return laundrys.splice(laundryIndex, 1)[0];
        }
        return null
    }

    if (deletedLaundry()) {
        res.status(204).json(null)
    } else {
        res.status(400).json({ error: 'Product not found' })
    }
}
  
  module.exports = {
    LaundryList,
    LaundryCreate,
    LaundryDetail,
    LaundryUpdate,
    LaundryDelete
  }