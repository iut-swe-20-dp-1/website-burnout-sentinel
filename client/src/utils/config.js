import Cookies from "js-cookie";

export const getAuthConfigHeader = () => {
  const accessToken1 = Cookies.get("accessToken");
  if (accessToken1) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken1}`,
      },
      credentials: "include",
    };
  } else {
    return "";
  }
};
