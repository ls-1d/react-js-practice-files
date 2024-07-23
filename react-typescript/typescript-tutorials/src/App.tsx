import './App.css';
import Box from './Components/contex/Box';
import { ThemeContextProvider } from './Components/contex/ThemeContex';

// import PersonList from './Components/PersonList';

// const nameList = [
//     {
//         first: 'Bruce',
//         last: 'Wayne',
//     },
//     {
//         first: 'Clark',
//         last: 'Kent',
//     },
//     {
//         first: 'Princess',
//         last: 'Diana',
//     },
// ];

// function handleClick(event: React.MouseEvent<HTMLButtonElement>, id: number) {
//     console.log('Button Clicked', id);
// }

// const [inputText, setInputText] = useState('');
// function handleChange(e) {
//     console.log(e.target.value);
//     setInputText(e.target.value);
function App() {
    return (
        <>
            {/* <PersonList personList={nameList} /> */}
            {/* <Status status="loading" /> */}
            {/* <Heading> Her</Heading> */}
            {/* <Oscar> */}
            {/* <Heading> Hello </Heading> */}
            {/* </Oscar> */}
            {/* <Greet name="Frankie" messageCount={11} isLoggedIn={true} />
            <Button handleClick={handleClick} /> */}
            {/* <Input value={inputText} handleOnChange={handleChange} /> */}
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
        </>
    );
}
export default App;
