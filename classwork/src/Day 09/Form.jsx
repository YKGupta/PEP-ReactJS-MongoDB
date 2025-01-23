import { useState } from "react";

const Form = () => {

    const [ inputs, setInputs ] = useState({});
    const [ displayData, setDisplayData ] = useState(false);

    const onChange = (ev) => {
        setInputs(prev => ({ ...prev, [ev.target.name]: ev.target.value}));
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        setDisplayData(true);
    };

    return (
        <div>
            <form style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }
            } onSubmit={onSubmit}>
                What is your favourite food? <input type="text" name="favFood" id="favFood" onChange={onChange} placeholder="Enter your favourite food item name..."/> <br />
                Mention any 3 hobbies: <input type="text" name="hobby1" id="hobby1" placeholder="Hobby 1" onChange={onChange} /><input type="text" name="hobby2" id="hobby2" placeholder="Hobby 2" onChange={onChange} /><input type="text" name="hobby3" id="hobby3" placeholder="Hobby 3" onChange={onChange} /> <br />
                When will you feel happy? <input type="text" name="happy" id="happy" placeholder="Enter the event..." onChange={onChange} /> <br />
                When will you get wild? <input type="text" name="wild" id="wild" placeholder="Enter the event..." onChange={onChange} /> <br />
                Help me to provide a best place to visit near by: <input type="text" name="place" id="place" placeholder="Enter the place..." onChange={onChange} /> <br />
                Who is you favourite cricket player? <input type="text" name="cricket" id="cricket" placeholder="Enter the name..." onChange={onChange} /> <br />
                Which is your favourite subject? <input type="text" name="subject" id="subject" placeholder="Enter the subject name..." onChange={onChange} /> <br />
                Who is your guide? <input type="text" name="guide" id="guide" placeholder="Enter the subject name..." onChange={onChange} /> <br />
                Mention your good father: <input type="text" name="father" id="father" placeholder="Enter the father's name..." onChange={onChange} />
                <input type="submit" value="Submit" />
            </form>
            {
                displayData && 
                <pre>
                    Favourite Food: {inputs.favFood} <br />        
                    Hobbies: {inputs.hobby1}, {inputs.hobby2}, {inputs.hobby3} <br />        
                    Happy event: {inputs.happy} <br />        
                    Wild event: {inputs.wild} <br />        
                    Best nearby place: {inputs.place} <br />        
                    Favourite Cricketer: {inputs.cricket} <br />        
                    Favourite Subject: {inputs.subject} <br />        
                    Guide: {inputs.guide} <br />        
                    Father: {inputs.father} <br />        
                </pre>
            }
        </div>
    )
}

export default Form;