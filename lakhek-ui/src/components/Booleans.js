import { useMemo } from "react";
import "../styles/components-css/Booleans.css";

const Booleans = ({ arrays, propPadding, propPadding1, propMinWidth }) => {
  const booleansStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const arraysStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="booleans" style={booleansStyle}>
      <div className="rectangle-parent6" style={groupDivStyle}>
        <div className="frame-child10" />
        <b className="arrays" style={arraysStyle}>
          {arrays}
        </b>
      </div>
    </div>
  );
};

export default Booleans;
