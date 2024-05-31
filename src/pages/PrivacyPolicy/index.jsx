import React from "react";

function PrivacyPolicy() {
  return (
    <div className="border-t border-black">
      <div className="lg:w-[600px] m-auto py-20">
        <h1 className="flex justify-center">Privacy Policy</h1>
        <p className="py-2 text-[16px]">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.{" "}
        </p>
        <div className="secury">
          <h3>Security</h3>
          <div className="py-2">
            <p>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque.
            </p>
          </div>
        </div>
        <div className="secury">
          <h3>Cookies</h3>
          <div className="py-2">
            <p>
              ● Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin.
              <br /> ● Nam fringilla molestie velit, eget pellentesque risus
              scelerisque a
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
