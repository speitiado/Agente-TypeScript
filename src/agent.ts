import { ChatOpenAI } from "@langchain/openai";
import { tool } from "@langchain/core/tools";
import * as z from "zod";

const llm = new ChatOpenAI ({
    model : "gpt-4o-mini",
    
})