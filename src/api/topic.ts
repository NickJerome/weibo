import request from "../utils/request";

export const getSystemInfo = () => {
  return request.get("/topic/list");
};