import React, { useEffect, useState } from "react";

import { Container } from "reactstrap";
import LoadingPage from "../TESTPage/LoadingPage";
import FadeIn from "react-fade-in/lib/FadeIn";

const OPDCTimeline = () => {
  document.title = "OPDC Timeline | Flexible Time";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div className="page-content">
      {!loading ? (
        <LoadingPage />
      ) : (
        <FadeIn>
          <Container fluid>
            {/* <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBangkok&src=a2FuaW5fY2hhbXBAaG90bWFpbC5jb20&src=OTgxcTdhNWxpMTloc2V1aW1iOTdjOW1oOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTY4OTI1NjcyNzYwNTA5NTQ4NDdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dGgudGgjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%23AD1457&color=%2333B679&color=%233F51B5&color=%230B8043"
            style={{ border: "solid 1px #777" }}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>{" "} */}
            <div
              style={{ border: "solid 2px #777", display: "flex", justifyContent: "center" }}
            >
              <iframe
                src="https://outlook.office365.com/calendar/published/c642f9b9710a4b5eab42c90829aa4280@opdcoffice365.onmicrosoft.com/d984c969411d4ed78c3d4e16987b917711049788667722385068/calendar.html"
                title="Outlook Calendar"
                width="1750"
                height="1200"
                allowFullScreen
                // frameฺBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </Container>
        </FadeIn>)}
    </div>
  );
};

export default OPDCTimeline;
