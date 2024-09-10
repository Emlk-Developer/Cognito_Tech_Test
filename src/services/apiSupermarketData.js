const API_URL = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json';

export const getData = async () => {
    /* wrap api request in a try catch if url is incorect or cannot be reached 
    the catch will retun the error message*/
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!response.ok) throw Error();
        return data;
      } catch {
        throw Error('Your data could not be found');
      }  
}

