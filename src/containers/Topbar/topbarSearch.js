import { AutoComplete, Input } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const TopbarSearch = () => {
  const [value, setValue] = useState();
  const [options, setOptions] = useState([])

  const navigate = useNavigate()

  const onSearch = async text => { }

  const onSelect = v => {
    setValue("");
    navigate(`/${v}`)
  }

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={false}
        filterOption={false}
        value={value}
        onSearch={onSearch}
        onSelect={onSelect}
        style={{ width: 200 }}
        options={options}
      >
        <Input placeholder="Type in to search..." />
      </AutoComplete>
    </div>
  )
}

export default TopbarSearch