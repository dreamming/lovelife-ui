import _ from "lodash";

export default function(errors) {
  const result = {};
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
}

// {
//     "errors": {
//         "errors": {
//             "email": {
//                 "message": "This email is already token",
//                 "name": "ValidatorError",
//                 "properties": {
//                     "type": "unique",
//                     "message": "This email is already token",
//                     "path": "email",
//                     "value": "527386108@qq.com"
//                 },
//                 "kind": "unique",
//                 "path": "email",
//                 "value": "527386108@qq.com",
//                 "$isValidatorError": true
//             }
//         },
//         "_message": "User validation failed",
//         "message": "User validation failed: email: This email is already token",
//         "name": "ValidationError"
//     }
// }
