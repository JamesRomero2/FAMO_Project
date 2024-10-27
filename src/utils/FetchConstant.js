import { requestToServer } from "../api/GlobalAPI";

export const fetchItemCategory = async () => {
  return requestToServer('get', 'getItemCategory', '', true)
    .then((response) => {
      return response
    }).catch((error) => {
      console.log(`Failed Sending Request ${error}`);
    });
}