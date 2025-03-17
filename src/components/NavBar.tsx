import {Container, Navbar, NavDropdown} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {modelActions} from "../store/store";

function NavBar() {
    const dispatch = useAppDispatch()
    const models = useAppSelector((state => state.model.availableModels));
    const selectedModel = useAppSelector((state) => state.model.selectedModel);

    return (
        <Navbar className="bg-body-tertiary">
            <Container className="d-flex flex-column align-items-center">
                <Navbar.Brand className="mb-2">The one and only Nikola Tesla Chatbot</Navbar.Brand>
                <NavDropdown title="AI model for chatbot" id="basic-nav-dropdown">
                    {models.map((model, index) => (
                        <NavDropdown.Item key={index} onClick={() => dispatch(modelActions.setModel(model))}
                                          active={model === selectedModel}>
                            {model}
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default NavBar;
