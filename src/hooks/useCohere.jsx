import { useState, useCallback } from "react";

const useCohere = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateText = useCallback(async (prompt, maxTokens = 50, model = "command") => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_COHERE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          prompt,
          max_tokens: maxTokens,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result.generations[0]?.text ?? "No text generated");
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { generateText, data, error, loading };
};

export default useCohere;
