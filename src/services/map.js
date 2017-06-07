import request from '../utils/request';

export function fetch({ selected }) {
  var direction;
  switch(selected){
    case "0":
      direction = {
        lon: 0,
        lat: 0
      };
      break;
    case "1":
      direction = {
        destination: {
            lon: 121.535497,
            lat: 25.042233
        }
      };
      break;
    case "2":
      direction = {
        destination: {
            lon: 121.564472,
            lat: 25.033964
        }
      };
      break;
    case "3":
      direction = {
        destination: {
            lon: 121.517040,
            lat: 25.047739
        }
      };
      break;
  }
  return direction;
}
