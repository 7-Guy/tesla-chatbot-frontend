import './App.css';
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {fetchModelsData} from "./store/features/models/model-actions";
import {useEffect} from "react";
import {fetchResponseForPendingQuestion} from "./store/features/discussions/discussion-actions";


function App() {
    const dispatch = useAppDispatch()
    const discussionState = useAppSelector((state) => state.discussion)

    useEffect(() => {
        dispatch(fetchModelsData())
    })

    useEffect(() => {
        if (discussionState.waitingForResponse) {
            dispatch(fetchResponseForPendingQuestion())
        }
    }, [discussionState.waitingForResponse, dispatch])

    return (
        <div className="App">
            <NavBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
