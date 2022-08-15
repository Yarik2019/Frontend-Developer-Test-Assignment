// get Users

export const getUsers = async (limitCount = 6, page = 1) => {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${limitCount}`
    );
    return response.json();
};

// get Token
export const getToken = async () => {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    );
    return response.json();
};


// get positions
export const getPositions = async () => {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
    );
    return response.json();
};


// post Users

export const postUsers = async (formData, token) => {
    console.log(token);
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users`,{
         method: 'POST', 
         body: formData, 
         headers: { 'Token': token }, 
      }
    );
    return response.json();
};