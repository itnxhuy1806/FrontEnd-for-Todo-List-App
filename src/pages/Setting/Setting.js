import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useSetting from './hooks/useSetting';

export default function Setting() {
    const { setting, handleSelect } = useSetting
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