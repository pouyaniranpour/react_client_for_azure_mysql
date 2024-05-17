import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_HOST = import.meta.env.VITE_APP_API_HOST;

export function Countries() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["countries"],
    queryFn: () => axios.get(`${API_HOST}`).then((res) => res.data),
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">All Countries</h2>
      <div className="mt-4">
        {/* 
        // Try to get the data to load from the API
        {isFetching ? (
          <div className="text-blue-500">Fetching...</div>
        ) : isPending ? (
          <div className="text-green-500">Loading...</div>
        ) : error ? (
          <div className="text-red-500">
            An error has occurred: {error.message}
          </div>
        ) : (
        <ul>
          {Array.from({ length: 1000 }).map((_, index) => (
            <li key={index}>
              {data.map((country) => (
                <li key={country.code}>
                  {country.name} - {country.code}
                </li>
              ))}
            </li>
          ))}
        </ul>
        )} */}
        {Array.from({ length: 1000 }).map((_, index) => (
          <li key={index}>
            <span>New Zealand / Aotearoa</span>
          </li>
        ))}
      </div>
    </div>
  );
}
