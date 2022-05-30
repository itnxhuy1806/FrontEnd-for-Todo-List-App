import {Link} from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useSetting from './hooks/useSetting';

export default function Setting() {
  const {setting, handleSelect} = useSetting();
  return (
    <>
      <h1>Setting</h1>
      <FormLabel id="demo-radio-buttons-group-label">
        <h1 style={{color: setting.color}}>Color</h1>
      </FormLabel>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={setting.color}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="blue"
            control={<Radio color={setting.color} />}
            onChange={handleSelect}
            label="Blue"
          />
          <FormControlLabel
            value="red"
            control={<Radio color={setting.color} />}
            onChange={handleSelect}
            label="Red"
          />
          <FormControlLabel
            value="pupple"
            control={<Radio color={setting.color} />}
            onChange={handleSelect}
            label="Pupple"
          />
          <FormControlLabel
            value="green"
            control={<Radio color={setting.color} />}
            onChange={handleSelect}
            label="Green"
          />
        </RadioGroup>
      </FormControl>
      <p>
        <Link style={{color: setting.color}} to="/">
          Back home
        </Link>
      </p>
    </>
  );
}
