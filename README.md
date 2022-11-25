# Dropdown for project 14 Openclassrooms

Dropdown button to use in React.

## Install

Run the command :

`npm i dropdown-odul68`

Import in your file :

`import { Dropdown } from "dropdown-odul68"`

### Usage

```Javascript

export const data =
[
  {
    name: 'John',
  },
  {
    name: 'Marc',
  },
  {
    name: 'Fred',
  }
]

  const [selectedData, setSelectedData] = useState(data[0]);

  function selectValue(e) {
    setSelectedData(e);
  }
```

```Javascript

<Dropdown selected={selectedData} label="Title" arr={data} field="name" onClick={selectValue} />
;
```
