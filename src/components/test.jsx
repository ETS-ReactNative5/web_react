// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Button } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

// export const TestUpload = () => {
//   const [state, setState] = useState("");
//   const [dpic, setDpic] = useState("");
//   const [fname, setfname] = useState("");

//   const Validate = (e) => {
//     // let file = e.target.files[0];
//     // console.log(e.target.files[0]);
//     // var fname = e.target.files[0].name;
//     if (!dpic) {
//       alert("no image");
//     }
//     // const res =
//     //   fname.includes(".jpg") ||
//     //   fname.includes(".jpeg") ||
//     //   fname.includes(".png") ||
//     //   fname.includes(".svg");
//     // res ? alert("IMAGE") : alert("not an image");
//     // setState(file);
//   };

//   const UploadFile = (e) => {
//     alert("uploaded");
//     const formdata = new FormData();
//     formdata.append("image", state);
//     formdata.append("file_name", "nayudu");
//     formdata.append("dpic", dpic.raw);

//     axios
//       .post("/test", formdata) //
//       .then(function(response) {});
//   };

//   return (
//     <>
//       <Avatar
//         alt="profile pic"
//         src={dpic.preview}
//         style={{ height: "150px", width: "150px", margin: "10px" }}
//       />
//       <div>
//         Select File&nbsp;&nbsp;&nbsp;
//         <Button variant="contained" component="label">
//           Choose File
//           <input
//             type="file"
//             id="contained-button-file1"
//             onChange={(e) => {
//               if (e.target.files.length != 0) {
//                 const image = e.target.files[0];
//                 setDpic({ raw: image, preview: URL.createObjectURL(image) });
//               }
//               e.target.value = "";
//             }}
//           />
//         </Button>
//         &nbsp;&nbsp;&nbsp;
//         <Button variant="contained" onClick={(e) => UploadFile(e)}>
//           Upload
//         </Button>
//       </div>
//     </>
//   );
// };
