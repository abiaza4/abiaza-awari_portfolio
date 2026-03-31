import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Demos from "./pages/Demos";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import BackToTop from "./components/BackToTop";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/demos">
          <Demos />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <BackToTop />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
