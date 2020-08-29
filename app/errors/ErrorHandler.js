import errorCodes from "./errorCodes-ar.json";
/*
  All error codes are from 0 to 199 
  All success codes are from 201 to 399

*/

class ErrorHandler {

  constructor() {
    this.errorCodes = errorCodes;
  }
  
  msg = async (errCodes) => {
    try {
      if (Array.isArray(errCodes)) {
        let errors = []; //Initial empty errors array

        //Get the error by its code
        errCodes.forEach(async (err) => {
          const message = await this.errorCodes[err.toString()];
          errors.push(message);
        });

        return errors;

      } else {
        return await this.errorCodes[errCodes];
      }
    } catch (e) {
      return `Couldn't find error with code: ${errCode}\nError: ${e.message}`;
    }
  }

  find = (errCode, toBeUpdated ,classThis) => {
    try {
      const message = errorCodes[errCode];
      return message;
    } catch (e) {
      return `Couldn't find error with code: ${errCode}\n${e.message}`;
    }
  }

}

export default new ErrorHandler;