// URL ===  api/new-meetup   ---> It triggers a function that i define 
// in this file.

function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const { title, image, address, description } = data;
    }
}

export default handler;