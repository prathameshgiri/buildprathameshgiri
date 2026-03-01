import { useState } from "react";
import { getSupabase } from "@/lib/api";
import { AlertCircle, CheckCircle2, Wifi, WifiOff } from "lucide-react";

export default function ConnectivityDiagnostic() {
  const [status, setStatus] = useState<"idle" | "testing" | "success" | "error">("idle");
  const [details, setDetails] = useState<string>("");

  const runTest = async () => {
    setStatus("testing");
    setDetails("Testing connection to Supabase...");
    
    const sb = getSupabase();
    if (!sb) {
      setStatus("error");
      setDetails("Supabase client not initialized. Check environment variables.");
      return;
    }

    try {
      const start = Date.now();
      const { data, error } = await sb.from("project_ideas").select("count", { count: "exact", head: true });
      const duration = Date.now() - start;

      if (error) {
        setStatus("error");
        let extra = "";
        if (error.message === "TypeError: Failed to fetch") {
          extra = " This usually means your Browser (Adblocker, Brave Shields, or Tracking Protection) is blocking the connection to Supabase.";
        } else if (error.code === "PGRST116") {
          extra = " Table exists but you don't have permission to view it (Check RLS).";
        }
        setDetails(`Connected to Supabase but got error: ${error.message} (Code: ${error.code || "None"}).${extra}`);
      } else {
        setStatus("success");
        setDetails(`Successfully connected to Supabase! Response time: ${duration}ms. Tables are reachable.`);
      }
    } catch (err: any) {
      console.error("Diagnostic error caught:", err);
      setStatus("error");
      let message = err.message;
      if (message === "TypeError: Failed to fetch") {
        message = "TypeError: Failed to fetch. This usually means your browser or ISP is blocking direct connection to Supabase. I have added a proxy to help with this, please try refreshing the page.";
      }
      setDetails(`Failed to reach Supabase: ${message}`);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-xl max-w-md mx-auto my-8">
      <div className="flex items-center gap-3 mb-4">
        <Wifi className="w-6 h-6 text-orange-500" />
        <h3 className="text-lg font-bold">Supabase Diagnostic</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        Use this tool to verify if your browser can reach your Supabase database.
      </p>

      {status === "idle" && (
        <button
          onClick={runTest}
          className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          Run Diagnostic Test
        </button>
      )}

      {status === "testing" && (
        <div className="flex items-center justify-center gap-3 py-2 text-orange-600">
          <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span>Testing...</span>
        </div>
      )}

      {status !== "idle" && status !== "testing" && (
        <div className={`p-4 rounded-xl border-2 ${status === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}>
          <div className="flex items-start gap-3">
            {status === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            )}
            <div className="text-xs break-words">
              <p className="font-bold mb-1">{status === "success" ? "Success!" : "Connection Failed"}</p>
              <p>{details}</p>
            </div>
          </div>
          <button
            onClick={runTest}
            className="mt-4 text-xs font-bold underline hover:opacity-80"
          >
            Run Again
          </button>
        </div>
      )}
    </div>
  );
}
