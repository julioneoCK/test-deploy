const loginService = async ({
  user,
  password,
}: {
  user: string;
  password: string;
}) => {
  try {
    const response = await fetch("https://neock.es/sac/v4/login.php", {
      method: "POST",
      body: JSON.stringify({ user, password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default loginService;
