import React from "react";
import top_btn from "../../assets/img/svg/right_arrow.svg";
const BackToTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <span
            onClick={moveToTop}
            className="top_animtion position-fixed bottom-0 end-0 me-4 mb-4 top_btn rounded-circle pointer back_to"
            
          ><img src={top_btn}
          alt="top_btn" /></span>
        ) : (
          ""
        )}
        <span></span>
      </div>
    </>
  );
};
export default BackToTop;
