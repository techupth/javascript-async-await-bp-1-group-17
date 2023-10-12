  // Exercise #4
  let getJohnProfile = () => {
    return new Promise(function (resolve) {
      setTimeout(
        () =>
          resolve({
            name: "John",
            age: 20,
            hobbies: ["Coding", "Football"],
          }),
        1000
      );
    });
  };
  // Start coding here
  async function getJohnFetch() {
    try {
      const getJohn = await getJohnProfile();
      console.log(getJohn);
    } catch (error) {
      console.log(error);
    }
  }
  getJohnFetch()