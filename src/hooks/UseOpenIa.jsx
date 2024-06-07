import { useState } from "react";
import OpenAI from "openai";

const useOpenAI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
  });

  const fetchResponse = async (prompt) => {
    setLoading(true);
    setError(null);
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
  };

  return { data, error, loading, fetchResponse };
};

export default useOpenAI;
