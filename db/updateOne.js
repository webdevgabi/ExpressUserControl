
module.exports = async ({ collection, data, condition }) => {

    try {
        const isUpdated = await db.collection(collection).updateOne(condition, { $set: data });

        if(isUpdated.modifiedCount === 0) {
            return false;
        }

        return true
    } 
    catch (e) { return false }

}