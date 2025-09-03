import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Navbar from "./components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      {/* <Route path="/tv-shows" component={TvShows} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile} />
      <Route path="/group-watch" component={GroupWatch} />
      <Route path="/watch/:contentId" component={Watch} />
      <Route path="/watch/:contentId/:episodeId" component={Watch} />
      <Route path="/group-watch/:roomId" component={Watch} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/tv-show/:id" component={TvShowDetails} />
      <Route path="/auth" component={Auth} />
      <Route component={NotFound} /> */}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider defaultTheme="dark">
        <Navbar />
        {/* <main> */}
        <main className="px-7">
          <Router />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
