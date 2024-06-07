import { useState, useEffect, useCallback } from "react";
import OpenAI from "openai";

const useOpenAI = (prompt) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchResponse = useCallback(async () => {
    setLoading(true);
    setError(null);

    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY || "",
      dangerouslyAllowBrowser: true,
    });

    try {
      const result = await openai.completions.create({
        model: "gpt-3.5-turbo-16k-0613",
        messages: [{ role: "user", content: prompt }],
      });
      setData(result.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [prompt]);

  useEffect(() => {
    if (prompt) {
      fetchResponse();
    }
  }, [fetchResponse, prompt]);

  return { data, error, loading };
};

export default useOpenAI;
