import Question from '../models/Question.js';
export default async () => {
    try {
        // Delete all documents in the Question collection
        await Question.deleteMany({});
        // Log the result
        console.log('Database cleaned successfully');
    }
    catch (err) {
        throw err;
    }
};
