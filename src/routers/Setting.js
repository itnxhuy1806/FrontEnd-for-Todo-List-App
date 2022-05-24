import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { setColor } from '../features/settingReducer';

export default function Setting() {
    const setting = useSelector(state => state.setting.value)
    const dispatch = useDispatch()

    function handleSelect(e) {
        dispatch(setColor(e.target.value))
    }
    return (
        <>
            <h1>Setting</h1>
            <FormLabel id="demo-radio-buttons-group-label"><h1>Color</h1></FormLabel>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={setting.color}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="White" control={<Radio />} onChange={handleSelect} label="White" />
                    <FormControlLabel value="Blue" control={<Radio />} onChange={handleSelect} label="Blue" />
                    <FormControlLabel value="Green" control={<Radio />} onChange={handleSelect} label="Green" />
                    <FormControlLabel value="Red" control={<Radio />} onChange={handleSelect} label="Yellow" />
                </RadioGroup>
            </FormControl>
            <p><Link style={{ color: "blue" }} to="/">Back home</Link></p>

        </>
    )
}