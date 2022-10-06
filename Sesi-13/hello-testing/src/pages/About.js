import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mt-4 p-5 mb-4 bg-light rounded-3 border">
        <div className="container">
          <Link to="/" className="btn btn-success btn-lg" type="button" role="button">
            Back to Home
          </Link>
          <br/>
          <br/>
          <div className="about">
            <h2 className="my-4">
              <b>Biodata</b>
            </h2>
            <h5>
              <p>Nama : Vika Alpiana </p>
            </h5>
            <h5>
              <p>Kode Peserta : RCTN-KS05-004 </p>
            </h5>
            <h5>
              <p>Hobi : Futsal </p>
            </h5><br />
            <h2 className="my-4">
              <b>Progress</b>
            </h2>
            <h5>Sesi 1 s.d 13 sudah/done</h5>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;