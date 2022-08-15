export const Fetching = (callback) => {
  let isLoading = false;
  let errorMsg = "";

  const fetching = async () => {
    try {
      isLoading = true;
      await callback();
    } catch (error) {
      errorMsg = error.message;
    } finally {
      isLoading = false;
    }
  };

  return [fetching, isLoading, errorMsg];
};
