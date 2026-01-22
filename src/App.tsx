import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthGuard } from "@/components/auth/AuthGuard";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OwaspTop10Page from "./pages/OwaspTop10Page";
import PromptInjectionPage from "./pages/exercises/PromptInjectionPage";
import JailbreakPage from "./pages/exercises/JailbreakPage";
import SmugglingPage from "./pages/exercises/SmugglingPage";
import LeakagePage from "./pages/exercises/LeakagePage";
import PoisoningPage from "./pages/exercises/PoisoningPage";
import ChainOfThoughtPage from "./pages/exercises/ChainOfThoughtPage";
import ToolInjectionPage from "./pages/exercises/ToolInjectionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthGuard>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/owasp-top-10" element={<OwaspTop10Page />} />
            <Route path="/exercise/prompt-injection" element={<PromptInjectionPage />} />
            <Route path="/exercise/jailbreak-ruolo" element={<JailbreakPage />} />
            <Route path="/exercise/prompt-smuggling" element={<SmugglingPage />} />
            <Route path="/exercise/system-prompt-leakage" element={<LeakagePage />} />
            <Route path="/exercise/context-poisoning" element={<PoisoningPage />} />
            <Route path="/exercise/chain-of-thought-extraction" element={<ChainOfThoughtPage />} />
            <Route path="/exercise/tool-injection" element={<ToolInjectionPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthGuard>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
