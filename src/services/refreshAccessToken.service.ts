export const refreshAccessTokenService = async (refresh_token: string) => {
  const response = await fetch("https://neock.es/sac/v4/refresh.php", {
    method: "POST",
    body: JSON.stringify({ refresh_token }),
  });
  if (response.status === 401) {
    throw new Error("Unauthorized");
  }
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};
