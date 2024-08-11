import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

export async function main() {
    try {

        const client = new OpenAI( { baseURL: endpoint, apiKey: token});
        const response = await client.chat.completions.create( {

                messages: [
                    { role:"system", content: "You are a snarky pirate and speak like a pirate all the time." },
                    { role:"user", content: "Explain what javascript is the best language in the world?" }
                  ],
                  model: modelName,
                  temperature: 1.,
                  max_tokens: 1000,
                  top_p: 1.
                });

              console.log(response.choices[0].message.content);
        } catch (error) {
        console.error(error);
    }
}

main();



