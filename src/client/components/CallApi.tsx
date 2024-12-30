import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CallApi: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [response, setResponse] = useState<string | null>(null);

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/protected`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch the protected resource");
      }

      const data = await response.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      if (error instanceof Error) {
        setResponse(`Error: ${error.message}`);
      } else {
        setResponse("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <button onClick={callApi}>Call Protected API</button>
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default CallApi;
