export interface ChatThreadProps {
  id: string;
  message: string;
  composedBy: "user" | "bot";
  isLocallyAdded?: boolean;
}
