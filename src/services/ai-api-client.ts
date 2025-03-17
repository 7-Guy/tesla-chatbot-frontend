import {Question} from "../models/Question";
import {OllamaResponseModel} from "../models/OllamaResponse";
import {Exhibit} from "../models/Exhibit";

const BASE_URL = "http://localhost:11434";

export async function fetchResponse(question: Question, exhibit: Exhibit, model: string): Promise<OllamaResponseModel> {
    const prompt: string = "Act as if you were Nikola Tesla. Let's talk about the"
        + exhibit.name + ". "
        + question.text + "?"
        + "Talk as Nikola Tesla."

    const requestBody = {
        model: model,
        prompt: prompt,
        stream: false
    };

    try {
        const response = await fetch(`${BASE_URL}/api/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        return {
            context: data.context,
            created_at: data.created_at,
            done: data.done,
            done_reason: data.done_reason,
            eval_count: data.eval_count,
            eval_duration: data.eval_duration,
            load_duration: data.load_duration,
            model: data.model,
            prompt_eval_count: data.prompt_eval_count,
            prompt_eval_duration: data.prompt_eval_duration,
            response: data.response,
            total_duration: data.total_duration
        };
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function fetchModels() {
    return fetch(`${BASE_URL}/api/tags`)
        .then((response) => response.json())
        .catch((error) => console.log('could not fetch models from ollama: ', error))
        .then((data) => {
            const models: string[] = data.models.map((model: any) => model.model);
            return models;
        });
}
