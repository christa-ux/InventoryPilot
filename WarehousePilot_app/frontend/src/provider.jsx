import { NextUIProvider } from '@nextui-org/react';
import { useNavigate } from "react-router-dom";

export function Provider({ children }) {
  const navigate = useNavigate();

  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}