import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../asset/css/main.css";
import Logo from "../asset/img/logo-ALTA-v2@2x.png";

class FormContacts extends React.Component {
  render() {
    return (
      <body>
        <title>Document</title>

        <div className="container-fluid">
          <div className="row d-flex align-items-center ">
            <div className="col-md-4 form-img">
              <div className="kotak w-100 text-center">
                <img className="alta" src={Logo} />
              </div>
            </div>
            <div className="col-md-8 isi-form">
              <h3>Contact Us</h3>
              <form>
                <div className="form-group rincian-form">
                  <label htmlFor="nama" className="required">
                    Full Name
                  </label>
                  <input type="fullname" className="form-control" id="namalengkap" placeholder="Your Full Name Here..." />
                </div>
                <div className="form-group rincian-form">
                  <label htmlFor="alamatemail" className="required">
                    Email Address
                  </label>
                  <input type="email" className="form-control" id="emailbaru" aria-describedby="emailHelp" placeholder="example@domail.com" />
                </div>
                <div className="form-group rincian-form">
                  <label htmlFor="telepon" className="required">
                    Phone Number
                  </label>
                  <input type="text" className="form-control" id="phonenumber" aria-describedby="nomorbaru" placeholder="08573890xxxxx" />
                </div>
                <div className="form-group rincian-form">
                  <label htmlFor="kewarganegaraan">Nationality</label>
                  <select className="form-control">
                    <option>Selected</option>
                  </select>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" rows={5} id="message" defaultValue={""} />
                  </div>
                </div>
                <input type="submit" className="tombol" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default FormContacts;
