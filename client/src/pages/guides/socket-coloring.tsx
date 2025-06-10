// This file is being consolidated into socket-coloring-mechanics.tsx
// Redirect to avoid duplication
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function SocketColoring() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    setLocation('/guides/socket-coloring-mechanics');
  }, [setLocation]);
  
  return null;
}