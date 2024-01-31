import React from "react";

const Footer = () => {
    const footerStyle = {
        border: "1px solid #c4c4c4",
        padding: "10px",
        marginTop: "20px",
        textAlign: "center",
        fontSize: "0.875rem",
    };

    return (
        <div style={footerStyle}>
            Utorex pte. Ltd. 2023
            <div>Terms & Privacy Policy</div>
        </div>
    );
};

export default Footer;
