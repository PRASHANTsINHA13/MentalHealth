export interface Chats {
  id: string;
  message: string;
  composedBy: "bot" | "user";
  date: string | null;
}
