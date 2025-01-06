import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Popover,PopoverContent, PopoverTrigger,} from "@/components/ui/popover";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div>
     <Navbar/>
    </div>
  );
}

export default App;
