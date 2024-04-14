interface ErrorResponse {
  type: "error";
  message: string;
}
interface SuccessResponse {
  type: "success";
  message: string;
  data?: string[] | string;
}
export type ServerActionResponse = ErrorResponse | SuccessResponse;
