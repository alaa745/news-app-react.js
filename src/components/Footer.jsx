const Footer = () => {
    return (
        <div className="footer">
            <div style={{ display: "flex", marginTop: "20px", flexDirection: "row", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "80%", display: "flex" }}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", height: "fit-content" }}>
                        <div style={{ color: "white", fontSize: "25px", "fontWeight": "bold" }}>NEWSLETTER</div>
                        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", color: "rgba(253, 253, 253, 1)", fontSize: "10px" }}>
                            <div color="white">Privacy Policy</div>
                            <div color="white">Terms Of Service</div>
                            <div color="white">Copyright Policy</div>
                            <div color="white">Data Privacy</div>
                            <div color="white">Accessibility</div>
                            <div color="white">Help</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Footer;