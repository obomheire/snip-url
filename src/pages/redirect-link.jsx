import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const { loading, data, fn } = useFetch(getLongUrl, id);

  const { loading: loadingStats, fn: fnStats } = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      if (!data.original_url) {
        setError(true);
        return;
      }

      fnStats();
      
      // Handle the URL redirection
      let redirectUrl = data.original_url;
      if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
        redirectUrl = 'https://' + redirectUrl;
      }

      // Use window.location for external URLs
      window.location.href = redirectUrl;
    }
  }, [loading, data]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Link Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="text-blue-500 hover:underline"
        >
          Go to Home
        </button>
      </div>
    );
  }

  if (loading || loadingStats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BarLoader width={"100%"} color="#36d7b7" />
        <br />
        <p className="text-lg">Redirecting...</p>
      </div>
    );
  }

  return null;
};

export default RedirectLink;