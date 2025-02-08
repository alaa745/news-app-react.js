import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/actions';
const FirstNav = ({ searchNews }) => {
    let searchQuery = useSelector((state) => state.searchQuery);
    let dispatch = useDispatch();
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#" style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>NEWSLETTER</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <div style={{ display: 'flex', width: "100%", justifyContent: "flex-end" }}>
                        <input type="text" value={searchQuery} onChange={(e) => dispatch(setSearchQuery(e.target.value))} className='search-input' placeholder='Search for headlines' />
                        <button className='search-btn' onClick={() => {
                            searchNews(searchQuery);
                            dispatch(setSearchQuery(""));
                        }}>SEARCH</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default FirstNav;