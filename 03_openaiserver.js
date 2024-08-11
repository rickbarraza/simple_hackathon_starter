import OpenAI from "openai";
import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config();

const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/message', async (req, res) => {

  const { message } = req.body;

  try {

    const client = new OpenAI( { baseURL: endpoint, apiKey: token});
    const OpenAI_response = await client.chat.completions.create( {

            messages: [
                { role:"system", content: "You are a snarky pirate and speak like a pirate all the time." },
                { role:"user", content: message }
              ],
              model: modelName,
              temperature: 1.,
              max_tokens: 1000,
              top_p: 1.
            });

    console.log(OpenAI_response);
    
    res.json({ message: OpenAI_response.choices[0].message.content });


  } catch (error) {
    console.error(error);
  }

  res.json({ message: "Hello, World!" });
});

app.listen( port, () => {
  console.log(`Server running on port ${port}`);
})


