const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.GENERATOR_API_KEY,
});

async function generatePost(req, res) {
    try {
        const { topic, style } = req.body;

        if (!topic || !style) {
            return res.status(400).json({ error: "Missing topic / style" });
        }

        const prompt = `Write a paragraph about "${topic}" in the style of "${style}"`;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        const generatedText = completion.choices[0].message.content;

        return res.json({ title: topic, generatedText });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error generating text" });
    }
}

module.exports = {
    generatePost,
};
