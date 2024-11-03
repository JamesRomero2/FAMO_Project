import { requestToServer } from "../api/GlobalAPI";

export const fetchItemCategory = async () => {
  return requestToServer('get', 'getItemCategory', '', true)
    .then((response) => {
      return response
    }).catch((error) => {
      console.log(`Failed Sending Request ${error}`);
    });
}

export const fetchItemUnitOfMeasurement = async () => {
  return requestToServer('get', 'getItemUnitOfMeasurement', '', true)
    .then((response) => {
      return response
    }).catch((error) => {
      console.log(`Failed Sending Request ${error}`);
    });
}

export const fetchDestination = async () => {
  return requestToServer('get', 'getDestination', '', true)
    .then((response) => {
      return response
    }).catch((error) => {
      console.log(`Failed Sending Request ${error}`);
    });
}