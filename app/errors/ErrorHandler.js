import errorCodes from "./errorCodes-ar.json";


/*
  All error codes are from 0 to 199 
  All success codes are from 201 to 399

*/

class ErrorHandler {

  msg = (errCode) => {
    try {
      const message = errorCodes[errCode];
      return message;
    } catch (e) {
      return `Couldn't find error with code: ${errCode}\n${e.message}`;
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