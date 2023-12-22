export const reproduceSensibleDataFetching = async (accessToken: string) => {
  const response = await fetch("https://neock.es/sac/v4/test.php", {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (response.status === 401) {
    throw new Error("Token de acceso caducado");
  }
  const data = await response.json();
  return data;
};
