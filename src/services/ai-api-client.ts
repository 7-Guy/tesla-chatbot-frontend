import {Question} from "../models/Question";
import {Exhibit} from "../models/Exhibit";
import {Answer} from "../models/Answer";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:11434";

export async function fetchResponse(question: Question, exhibit: Exhibit, model: string): Promise<string> {
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
        return data.response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

interface Message {
    role: string;
    content: string;
}

function getChatHistoryForRequest(questions: Question[], answers: Answer[]) {
    const messages: Message[] = [];
    questions.forEach((question, index) => {
        messages.push({role: "user", content: question.text});
        if (answers[index]) {
            messages.push({role: "assistant", content: answers[index].text});
        }
    });
    return messages;
}

export async function fetchNextResponse(questions: Question[], answers: Answer[], model: string): Promise<string> {

    const messages: Message[] = getChatHistoryForRequest(questions, answers);

    const requestBody = {
        model: model,
        messages: messages,
        stream: false
    };

    try {
        const response = await fetch(`${BASE_URL}/api/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        return data.message.content;
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


