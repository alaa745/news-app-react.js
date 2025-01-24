import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const FirstNav = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#" style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>NEWSLETTER</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <div style={{display:'flex' , width: "100%" , justifyContent: "flex-end"}}>
                        <input type="text" className='search-input' placeholder='Search for headlines'/>
                        <button className='search-btn'>SEARCH</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default FirstNav;