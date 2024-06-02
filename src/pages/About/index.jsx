import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="border-t border-black">
      <div className="lg:w-[600px] m-auto py-20">
        <div className="text-center">
          <h1>About</h1>
          <p>Who we are and why we do what we do!</p>
        </div>

        <p className="py-2 text-[16px]">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.{" "}
        </p>
        <div className="secury">
          <h3>Security</h3>
          <Link to="/notFound404" className="no-underline">
            <div className="py-2">
              <img className="w-[100%]" src="/img/bloginf.png" alt="" />
            </div>
          </Link>
          <div className="py-2">
            <p>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque.
            </p>
          </div>
        </div>
        <div className="secury">
          <div className="py-2">
            <p>
              ● consectetur adipiscing elit. Aliquam placerat
              <br /> ● Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div className="secury">
          <h3>Produced with care</h3>
          <Link to="/notFound404" className="no-underline">
            <div className="py-2">
              <img className="w-[100%]" src="/img/blogab.png" alt="" />
            </div>
          </Link>
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
