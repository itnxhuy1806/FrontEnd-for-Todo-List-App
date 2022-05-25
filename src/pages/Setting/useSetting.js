import { useSelector, useDispatch } from 'react-redux'
import { setColor } from '../../stores/features/settingReducer';

export default function useSetting() {
    const setting = useSelector(state => state.setting.value)
    const dispatch = useDispatch()

    function handleSelect(e) {
        dispatch(setColor(e.target.value))
    }
    return { setting,handleSelect}
}