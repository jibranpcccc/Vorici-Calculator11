// This file is being consolidated into path-of-exile-crafting-guide.tsx
// Redirect to avoid duplication
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function CraftingGuide() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    setLocation('/guides/path-of-exile-crafting-guide');
  }, [setLocation]);
  
  return null;
}