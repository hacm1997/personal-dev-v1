import { POST } from "@/constants/constant";
import { typeAxiosRequest } from "../axiosIntance";

export const authLogin = async (email: string, password: string) => {
  const getRequest = typeAxiosRequest(POST);
  try {
    const res = await getRequest({
      url: "/auth/login",
      data: {
        email,
        password,
      },
    });
    const response = res.data;
    return response;
  } catch (error) {
    console.error("Error to login:", error);
    throw error;
  }
};

export const getUserInfo = async (email: string) => {
  const getRequest = typeAxiosRequest(POST);
  try {
    if (email) {
      const res = await getRequest({
        url: "/user/preferences",
        data: {
          email,
        },
      });
      const response = res.data;
      return response;
    }
  } catch (error) {
    console.error("Error to get preferences:", error);
    throw error;
  }
};