import NavBar from "./components/NavBar";
const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div className="signUp">
        <div className="signUp_registerTitle">
          <div className="signUp_registerTitle_headingJoin">CLICK</div>
          <p className="signUp_registerTitle_headingToEnjoy">
            “Unlock Exclusive Delights: Sign Up to Experience Personalized
            Dining, Effortless Reservations, and Seamless Culinary Adventures
            with CLICK!”
          </p>
        </div>

        <div className="signUp_form">
          <div className="signUp_form_formGroup-1">
            <div className="signUp_form_label">
              <lable for="nameInput1">First Name / Given Name *</lable>
            </div>

            <input
              className="signUp_form_nameInput"
              id="nameInput1"
              type="text"
              required
            />
          </div>
          <div className="signUp_form_formGroup-2">
            <div className="signUp_form_label">
              <label for="nameInput2">Family Name / Last Name * </label>
            </div>

            <input
              id="nameInput2"
              type="text"
              required
              className="signUp_form_nameInput"
            />
          </div>
          <div className="signUp_form_formGroup-3">
            <div className="signUp_form_label">
              <label>Mobile / Email *</label>
            </div>

            <div className="signUp_form_formGroup-3_inputField">
              <div className="signUp_form_formGroup-3_inputField_dropdownSelect">
                <select name="verficationMethod" id="verficationMethod">
                  <option value="email">E-mail</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
              <input
                type="text"
                className="signUp_form_nameInput signUp_form_formGroup-3_inputField_input"
              />
              <button className="signUp_form_formGroup-3_inputField_btn">
                Send
              </button>
            </div>
          </div>
          <div className="signUp_form_formGroup-4">
            <div className="signUp_form_label">
              <label for="input3">Verification *</label>
            </div>
            <input
              className="signUp_form_nameInput"
              id="input3"
              type="text"
              required
              placeholder="Enter Verification Code"
            />
            <div className="signUp_form_formGroup-4_tips-title">
              Not received verification code?
            </div>
          </div>
          <div className="signUp_form_formGroup-5">
            <div className="signUp_form_label">
              <label for="password">Password *</label>
            </div>
            <input
              className="signUp_form_nameInput"
              id="password"
              type="password"
              required
            />
            <div className="signUp_form_formGroup-5_info">
              <p className="signUp_form_formGroup-5_info_your-password-must">
                * Your password must contain at least 8 characters, with a
                combination of English letters (a - z, A - Z)
                <br />
                and numeric digits (0 - 9). At least one of the characters must
                be a numeric digit.
              </p>
            </div>
          </div>
          <div className="signUp_form_policy">
            <input
              className="signUp_form_policy_checkbox"
              type="checkbox"
              id="policy"
            />
            <label for="policy">
              I have read and agree to the CLICK Hotel Terms and Conditions
            </label>
          </div>
          <button className="signUp_form_sl-btn-normal">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React from "react";
// import "./style.css";

// export const SignUp = () => {
//   return (
//     <div className="sign-up">
//       <div className="div-register-title">
//         <div className="overlap-group">
//           <div className="heading-join">CLICK</div>
//           <p className="heading-to-enjoy">
//             “Unlock Exclusive Delights: Sign Up to Experience Personalized
//             Dining, Effortless Reservations, and Seamless Culinary Adventures
//             with CLICK!”
//           </p>
//         </div>
//       </div>
//       <div className="form">
//         <div className="div-form-group">
//           <lable className="label1">
//             <div className="text-wrapper-3">First Name/Given Name</div>
//             <div className="text-wrapper-4">*</div>
//           </lable>
//           <input type="text" required />
//         </div>

//         <div className="div-form-group-2">
//           <label className="label2">
//             <p className="text-wrapper-3">Family Name / Last Name</p>
//             <div className="text-wrapper-5">*</div>
//           </label>
//           <input type="text" required />
//         </div>

//         <div className="div-form-group-3">
//           <div className="label">
//             <div className="text-wrapper-3">Mobile/Email</div>
//             <div className="text-wrapper-6">*</div>
//           </div>
//           <div className="div-sl-flexbox">
//             <div className="overlap-group-2">
//               <input type="text" required />
//               <div className="div-dropdown-select">
//                 <div className="div-js-text">
//                   <div className="text-wrapper-7">E-mail</div>
//                 </div>
//                 <div className="symbol"></div>
//               </div>
//             </div>
//             <div className="div-verify-identity">
//               <div className="text-wrapper-8">Send</div>
//             </div>
//           </div>
//         </div>

//         <div className="div-form-group-4">
//           <div className="label-2">
//             <div className="text-wrapper-3">Verification</div>
//             <div className="text-wrapper-9">*</div>
//           </div>
//           <div className="div-tips-title">
//             <div className="text-wrapper-10">
//               Not received verification code?
//             </div>
//           </div>
//           <input type="text" required placeholder="Enter Verification Code" />
//         </div>

//         <div className="div-form-group-5">
//           <label className="label-2">
//             <div className="text-wrapper-3">Password</div>
//             <div className="text-wrapper-12">*</div>
//           </label>
//           <input type="password" required />
//           <div className="div-info">
//             <p className="your-password-must">
//               * Your password must contain at least 8 characters, with a
//               combination of English letters (a - z, A - Z)
//               <br />
//               and numeric digits (0 - 9). At least one of the characters must be
//               a numeric digit.
//             </p>
//           </div>
//           <div className="div-input-wrap">
//             <div className="symbol-2"></div>
//           </div>
//         </div>
//         <div className="div-policy">
//           <div className="label-3" />
//           <div className="overlap">
//             <p className="p">I have read and agree to the Shangri-La Circle</p>
//             <div className="link">
//               <div className="text-wrapper-13">Terms and Conditions</div>
//             </div>
//             <div className="text-wrapper-14">, the</div>
//             <div className="link-2">
//               <div className="text-wrapper-15">Privacy</div>
//               <div className="text-wrapper-16">Policy</div>
//             </div>
//             <div className="text-wrapper-17">and the</div>
//             <div className="text-wrapper-18">.</div>
//           </div>
//         </div>
//         <button className="div-sl-btn-normal">Submit</button>
//       </div>
//     </div>
//   );
// };
