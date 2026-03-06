import { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin, Briefcase, MessageSquare, Lightbulb, Calendar, LogOut, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { authAPI, UserProfile } from "@/lib/api";
import { useNavigate, Link } from "react-router-dom";
import { isFirebaseConfigured } from "@/lib/firebase";

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [ideas, setIdeas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isConfigured = isFirebaseConfigured();

  useEffect(() => {
    let isMounted = true;

    if (!isConfigured) {
      navigate("/auth?mode=login");
      return;
    }

    const fetchData = async () => {
      try {
        const currentUser = await authAPI.getCurrentUser();
        if (!isMounted) return;

        if (!currentUser) {
          navigate("/auth?mode=login");
          return;
        }
        setUser(currentUser);

        // Fetch submissions and ideas independently to handle errors
        const fetchSubmissions = async () => {
          try {
            const data = await authAPI.getUserSubmissions();
            if (isMounted) setSubmissions(data);
          } catch (err) {
            console.error("Submissions fetch error:", err);
          }
        };

        const fetchIdeas = async () => {
          try {
            const data = await authAPI.getUserIdeas();
            if (isMounted) setIdeas(data);
          } catch (err) {
            console.error("Ideas fetch error:", err);
          }
        };

        await Promise.allSettled([fetchSubmissions(), fetchIdeas()]);
      } catch (error) {
        if (isMounted) console.error("Error fetching profile data:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [isConfigured, navigate]);

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 border-2 border-orange-100 shadow-xl sticky top-24">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>

              <div className="space-y-4 mb-8">
                {user.phone && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                )}
                {user.company && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Briefcase className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">{user.company}</span>
                  </div>
                )}
                {user.address && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">{user.address}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-3 border-2 border-red-100 text-red-500 font-bold rounded-xl hover:bg-red-50 hover:border-red-200 transition-all duration-300"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* User Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Submissions */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">My Submissions</h3>
              </div>

              {submissions.length > 0 ? (
                <div className="grid gap-4">
                  {submissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="bg-white rounded-2xl p-6 border-2 border-orange-50 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-gray-900">{sub.subject}</h4>
                        {sub.created_at && (
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {new Date(sub.created_at.seconds * 1000).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{sub.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-orange-50 rounded-2xl p-12 text-center border-2 border-dashed border-orange-200">
                  <MessageSquare className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No contact form submissions yet.</p>
                </div>
              )}
            </section>

            {/* My Ideas */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">My Project Ideas</h3>
              </div>

              {ideas.length > 0 ? (
                <div className="grid gap-4">
                  {ideas.map((idea) => (
                    <div
                      key={idea.id}
                      className="bg-white rounded-2xl p-6 border-2 border-orange-50 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-orange-500" />
                          <h4 className="font-bold text-gray-900">Project Idea</h4>
                        </div>
                        {idea.created_at && (
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {new Date(idea.created_at.seconds * 1000).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{idea.idea}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-orange-50 rounded-2xl p-12 text-center border-2 border-dashed border-orange-200">
                  <Lightbulb className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No project ideas shared yet.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
