import errorCodes from "./errorCodes-ar.json";
/*
  All error codes are from 0 to 199 
  All success codes are from 201 to 399

*/

class ErrorHandler {

  constructor() {
    this.errorCodes = errorCodes;
  }
  
  msg = (errCodes) => {
    try {
        let errors = []; //Initial empty errors array

        //Get the error by its code
        errCodes.forEach((err) => {
          const message = this.errorCodes[err];
          errors.push(message);
        });

      return errors;
      
    } catch (e) {
      return [`Couldn't find error with code: ${errCode}\nError: ${e.message}`];
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